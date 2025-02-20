import useInput from "./use-input";
import UseInputProperties from "./use-input-properties";

export default function useDate(
  defaultValue = new Date(),
): UseInputProperties<Date> {
  return useInput<Date>(defaultValue, (newValue) => new Date(newValue));
}
