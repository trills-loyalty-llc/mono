import useInput from "./use-input";
import type UseInputProperties from "./use-input-properties";

export function useText(defaultValue = ""): UseInputProperties<string> {
  return useInput(defaultValue, (newValue) => newValue);
}
