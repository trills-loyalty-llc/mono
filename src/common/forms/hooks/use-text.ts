import useInput from "./use-input";
import type UseInputProperties from "./use-input-properties";

/**
 *
 * @param defaultValue
 */
export function useText(defaultValue = ""): UseInputProperties<string> {
  return useInput(defaultValue, (newValue) => newValue);
}
