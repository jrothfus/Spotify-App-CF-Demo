import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import { ErrorObject, errorObject, errorObjectRequest, errorObjectResponse } from './error-object';

export type IForbiddenSchema = {
  error: ErrorObject;
};

export const forbiddenResponse = z.lazy(() => {
  return z
    .object({
      error: errorObjectResponse,
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class Forbidden extends ThrowableError {
  public error: ErrorObject;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = forbiddenResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new Forbidden(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
