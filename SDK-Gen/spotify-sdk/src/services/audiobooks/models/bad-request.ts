import { z } from 'zod';
import { ThrowableError } from '../../../http/errors/throwable-error';
import {
  ErrorObject,
  errorObject,
  errorObjectRequest,
  errorObjectResponse,
} from '../../common/error-object';

export type IBadRequestSchema = {
  error: ErrorObject;
};

export const badRequestResponse = z.lazy(() => {
  return z
    .object({
      error: errorObjectResponse,
    })
    .transform((data) => ({
      error: data['error'],
    }));
});

export class BadRequest extends ThrowableError {
  public error: ErrorObject;
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);

    const parsedResponse = badRequestResponse.parse(response);

    this.error = parsedResponse.error;
  }

  public throw() {
    const error = new BadRequest(this.message, this.response);
    error.metadata = this.metadata;
    throw error;
  }
}
