import useInput from "./use-input";
import type UseInputProperties from "./use-input-properties";

/**
 *
 * @param defaultValue
 */
export function useDate(defaultValue = new Date()): UseInputProperties<Date> {
  return useInput(defaultValue, (newValue) => new Date(newValue));
}
