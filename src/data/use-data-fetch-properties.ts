import type { ErrorResponse } from "./error-response";

export default interface UseDataFetchProperties<TResponse> {
  value: TResponse;
  error: ErrorResponse;
}
