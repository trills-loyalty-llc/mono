import type { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import type UseDataFetchProperties from "./use-data-fetch-properties";
import { defaultError } from "../../../data/error-response";

/**
 *
 * @param defaultValue
 * @param callback
 */
export default function useDataFetch<TResponse>(
  defaultValue: TResponse,
  callback: () => Promise<AxiosResponse<TResponse>>,
): UseDataFetchProperties<TResponse> {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(defaultError);

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
