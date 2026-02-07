import type { InputType } from "../../hooks/input-type";
import type UseInputProperties from "../../hooks/use-input-properties";

export default interface DerivedProperties {
  label: string;
  useInput: UseInputProperties<InputType>;
}
