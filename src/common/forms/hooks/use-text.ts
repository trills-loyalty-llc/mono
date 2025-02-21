import useInput from "./use-input";
import UseInputProperties from "./use-input-properties";

export function useText(defaultValue = ""): UseInputProperties<string> {
  return useInput<string>(defaultValue, (newValue) => newValue);
}
