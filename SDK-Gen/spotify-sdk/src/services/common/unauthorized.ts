import { z } from 'zod';
import { ThrowableError } from '../../http/errors/throwable-error';
import { ErrorObject, errorObject, errorObjectRequest, errorObjectResponse } from './error-object';

export type IUnauthorizedSchema = {
  error: ErrorObject;
};

export const unauthorizedResponse = z.lazy(() => {
  return z
    .object({
      error: errorObjectResponse,
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class Unauthorized extends ThrowableError {
  public error: ErrorObject;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = unauthorizedResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new Unauthorized(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
