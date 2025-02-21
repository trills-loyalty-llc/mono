export interface ErrorResponse {
  title: string;
  detail: string;
}

export const defaultError: ErrorResponse = {
  title: "",
  detail: "",
};
