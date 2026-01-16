import { AxiosResponse } from "axios";
import UseDataFetchProperties from "./use-data-fetch-properties";
import { useEffect, useState } from "react";
import { StatusCodes } from "./status-codes";
import { defaultError, ErrorResponse } from "./error-response";

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

        if (result.status === StatusCodes.Ok.valueOf()) {
          setValue(result.data);
        } else {
          setError(result.data as ErrorResponse);
        }
      } catch (error: unknown) {
        console.log(error);
      }
    };

    void getData();
  }, [callback]);

  return { value, error };
}
