import { spawn } from 'node:child_process';

const commands = [
  ['api', 'npx', ['tsx', 'server/index.ts']],
  ['ui', 'npx', ['vite', '--host', '0.0.0.0']],
];

const children = commands.map(([name, command, args]) => {
  const child = spawn(command, args, {
    stdio: 'pipe',
    shell: process.platform === 'win32',
  });

  child.stdout.on('data', (chunk) => process.stdout.write(prefixLines(name, chunk)));
  child.stderr.on('data', (chunk) => process.stderr.write(prefixLines(name, chunk)));
  child.on('exit', (code) => {
    if (code) {
      console.error(`[${name}] exited with code ${code}`);
      stopChildren();
      process.exit(code);
    }
  });

  return child;
});

process.on('SIGINT', () => {
  stopChildren();
  process.exit(0);
});

process.on('SIGTERM', () => {
  stopChildren();
  process.exit(0);
});

function prefixLines(name, chunk) {
  return chunk
    .toString()
    .split('\n')
    .map((line) => (line ? `[${name}] ${line}` : line))
    .join('\n');
}

function stopChildren() {
  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGTERM');
    }
  }
}
