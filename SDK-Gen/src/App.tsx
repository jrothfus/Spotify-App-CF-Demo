import { useEffect, useMemo, useState } from 'react';
import { Calendar, ExternalLink, Loader2, Music2, Search, Star, Users } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type Artist = {
  id: string;
  name: string;
  popularity: number;
  image?: string;
  genres: string[];
  followers?: number;
  spotifyUrl?: string;
};

type Track = {
  id: string;
  name: string;
  popularity: number;
  artistNames: string[];
  albumName?: string;
  albumImage?: string;
  releaseDate?: string;
  durationMs?: number;
  explicit?: boolean;
  spotifyUrl?: string;
};

type DiscoverResponse = {
  year: number;
  generatedAt: string;
  artists: Artist[];
  tracks: Track[];
};

const currentYear = new Date().getFullYear();

function App() {
  const [yearInput, setYearInput] = useState(String(currentYear));
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [data, setData] = useState<DiscoverResponse | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [artistTracks, setArtistTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isArtistLoading, setIsArtistLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    setError('');

    fetch(`/api/discover?year=${selectedYear}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) {
          const body = await response.json().catch(() => ({}));
          throw new Error(body.hint ?? body.message ?? 'Could not load Spotify data.');
        }
        return response.json() as Promise<DiscoverResponse>;
      })
      .then((payload) => {
        setData(payload);
        setSelectedArtist(payload.artists[0] ?? null);
      })
      .catch((caught: Error) => {
        if (caught.name !== 'AbortError') {
          setError(caught.message);
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, [selectedYear]);

  useEffect(() => {
    if (!selectedArtist) {
      setArtistTracks([]);
      return;
    }

    const controller = new AbortController();
    setIsArtistLoading(true);

    fetch(`/api/artists/${selectedArtist.id}/top-tracks`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) {
          const body = await response.json().catch(() => ({}));
          throw new Error(body.message ?? 'Could not load artist tracks.');
        }
        return response.json() as Promise<{ tracks: Track[] }>;
      })
      .then((payload) => setArtistTracks(payload.tracks))
      .catch((caught: Error) => {
        if (caught.name !== 'AbortError') {
          setArtistTracks([]);
        }
      })
      .finally(() => setIsArtistLoading(false));

    return () => controller.abort();
  }, [selectedArtist]);

  const topTrack = data?.tracks[0];
  const yearOptions = useMemo(
    () => [currentYear, currentYear - 1, currentYear - 5, currentYear - 10].filter((year) => year >= 1950),
    [],
  );

  function submitYear(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextYear = Number(yearInput);
    if (Number.isInteger(nextYear) && nextYear >= 1950 && nextYear <= currentYear) {
      setSelectedYear(nextYear);
    }
  }

  return (
    <main>
      <section className="intro">
        <div>
          <p className="eyebrow">Spotify Music Radar</p>
          <h1>Find the artists and songs your students probably know.</h1>
          <p className="lede">
            Browse popular Spotify artists and tracks by release year, then jump straight into an
            artist's top songs or open a track in Spotify.
          </p>
        </div>

        <form className="year-search" onSubmit={submitYear}>
          <label htmlFor="year">Year</label>
          <div className="input-row">
            <Calendar aria-hidden="true" size={18} />
            <input
              id="year"
              min="1950"
              max={currentYear}
              inputMode="numeric"
              value={yearInput}
              onChange={(event) => setYearInput(event.target.value)}
            />
            <button type="submit">
              <Search aria-hidden="true" size={18} />
              Search
            </button>
          </div>
          <div className="quick-years">
            {yearOptions.map((year) => (
              <button key={year} type="button" onClick={() => {
                setYearInput(String(year));
                setSelectedYear(year);
              }}>
                {year}
              </button>
            ))}
          </div>
        </form>
      </section>

      {error ? <div className="notice">{error}</div> : null}

      <section className="stats-band">
        <Stat icon={<Users size={20} />} label="Artists" value={data?.artists.length ?? 0} />
        <Stat icon={<Music2 size={20} />} label="Tracks" value={data?.tracks.length ?? 0} />
        <Stat icon={<Star size={20} />} label="Top song" value={topTrack?.name ?? 'Loading'} />
      </section>

      <section className="content-grid">
        <div className="panel artists-panel">
          <div className="panel-heading">
            <h2>Top Artists</h2>
            <span>{selectedYear}</span>
          </div>
          {isLoading ? <LoadingRows /> : null}
          {!isLoading && data?.artists.map((artist, index) => (
            <button
              className={`artist-row ${selectedArtist?.id === artist.id ? 'active' : ''}`}
              key={artist.id}
              onClick={() => setSelectedArtist(artist)}
              type="button"
            >
              <span className="rank">{index + 1}</span>
              {artist.image ? <img src={artist.image} alt="" /> : <span className="avatar">{artist.name[0]}</span>}
              <span className="artist-copy">
                <strong>{artist.name}</strong>
                <small>{artist.genres.slice(0, 2).join(', ') || 'Popular on Spotify'}</small>
              </span>
              <Popularity value={artist.popularity} />
            </button>
          ))}
        </div>

        <div className="panel tracks-panel">
          <div className="panel-heading">
            <h2>Top Songs</h2>
            <span>{selectedYear}</span>
          </div>
          {isLoading ? <LoadingRows /> : null}
          {!isLoading && data?.tracks.map((track, index) => (
            <TrackRow key={track.id} index={index} track={track} />
          ))}
        </div>

        <aside className="panel detail-panel">
          {selectedArtist ? (
            <>
              <div className="artist-hero">
                {selectedArtist.image ? <img src={selectedArtist.image} alt="" /> : null}
                <div>
                  <p className="eyebrow">Artist Focus</p>
                  <h2>{selectedArtist.name}</h2>
                  <p>{selectedArtist.genres.slice(0, 3).join(' / ') || 'Spotify favorite'}</p>
                </div>
              </div>
              <div className="detail-meta">
                <span>{formatFollowers(selectedArtist.followers)} followers</span>
                <span>{selectedArtist.popularity}/100 popularity</span>
              </div>
              <div className="panel-heading compact">
                <h3>Most Popular Tracks</h3>
                {isArtistLoading ? <Loader2 className="spin" size={18} /> : null}
              </div>
              <div className="artist-tracks">
                {artistTracks.map((track, index) => (
                  <TrackRow key={track.id} index={index} track={track} compact />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">Choose an artist to see their top tracks.</div>
          )}
        </aside>
      </section>
    </main>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="stat">
      {icon}
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TrackRow({ track, index, compact = false }: { track: Track; index: number; compact?: boolean }) {
  return (
    <a className={`track-row ${compact ? 'compact' : ''}`} href={track.spotifyUrl} target="_blank" rel="noreferrer">
      <span className="rank">{index + 1}</span>
      {track.albumImage ? <img src={track.albumImage} alt="" /> : <span className="album-fallback"><Music2 size={18} /></span>}
      <span className="track-copy">
        <strong>{track.name}</strong>
        <small>{track.artistNames.join(', ') || track.albumName}</small>
      </span>
      {!compact ? <Popularity value={track.popularity} /> : null}
      <ExternalLink aria-hidden="true" size={17} />
    </a>
  );
}

function Popularity({ value }: { value: number }) {
  return (
    <span className="popularity" title={`Spotify popularity ${value}/100`}>
      {value}
    </span>
  );
}

function LoadingRows() {
  return (
    <div className="loading-list">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="skeleton-row" key={index} />
      ))}
    </div>
  );
}

function formatFollowers(value?: number) {
  if (!value) {
    return 'Unknown';
  }
  return new Intl.NumberFormat('en', { notation: 'compact' }).format(value);
}

createRoot(document.getElementById('root')!).render(<App />);
