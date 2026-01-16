import { AxiosRequestConfig } from "axios";
import { Api } from "./api-client";

export default function dataClient(): Api<void> {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_API_URI,
    timeout: 10_000,
  };

  return new Api(config);
}
