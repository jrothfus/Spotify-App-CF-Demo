import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import { ErrorObject, errorObject, errorObjectRequest, errorObjectResponse } from './error-object';

export type ITooManyRequestsSchema = {
  error: ErrorObject;
};

export const tooManyRequestsResponse = z.lazy(() => {
  return z
    .object({
      error: errorObjectResponse,
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class TooManyRequests extends ThrowableError {
  public error: ErrorObject;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = tooManyRequestsResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new TooManyRequests(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
