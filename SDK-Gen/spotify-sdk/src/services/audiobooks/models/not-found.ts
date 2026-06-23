import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorObject,
  errorObject,
  errorObjectRequest,
  errorObjectResponse,
} from '../../common/error-object';

export type INotFoundSchema = {
  error: ErrorObject;
};

export const notFoundResponse = z.lazy(() => {
  return z
    .object({
      error: errorObjectResponse,
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class NotFound extends ThrowableError {
  public error: ErrorObject;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = notFoundResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new NotFound(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
