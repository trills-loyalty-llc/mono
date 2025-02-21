import { ErrorResponse } from "./error-response";

export default interface UseDataFetchProperties<TResponse> {
  value: TResponse;
  isLoading: boolean;
  error: ErrorResponse;
}
