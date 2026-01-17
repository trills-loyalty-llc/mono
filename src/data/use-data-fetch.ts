import type { AxiosResponse } from "axios";
import type UseDataFetchProperties from "./use-data-fetch-properties";
import { useEffect, useState } from "react";
import { defaultError, type ErrorResponse } from "./error-response";

export default function useDataFetch<TResponse>(
  defaultValue: TResponse,
  callback: () => Promise<AxiosResponse<TResponse, void>>,
): UseDataFetchProperties<TResponse> {
  const [value, setValue] = useState<TResponse>(defaultValue);
  const [error, setError] = useState<ErrorResponse>(defaultError);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const result = await callback();

        setValue(result.data);
      } catch (error: unknown) {
        setError(defaultError);
        console.log(error);
      }
    };

    void getData();
  }, [callback]);

  return { value, error };
}
