import type { ErrorResponse } from "../../../data/error-response";

export default interface UseDataFetchProperties<TResponse> {
  value: TResponse;
  error: ErrorResponse;
}
