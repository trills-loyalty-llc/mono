import useInput from "./use-input";
import type UseInputProperties from "./use-input-properties";

export function useDate(defaultValue = new Date()): UseInputProperties<Date> {
  return useInput<Date>(defaultValue, (newValue) => new Date(newValue));
}
