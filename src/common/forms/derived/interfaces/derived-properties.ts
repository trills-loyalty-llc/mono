import { InputType } from "../../hooks/input-type";
import UseInputProperties from "../../hooks/use-input-properties";

export default interface DerivedProperties {
  label: string;
  useInput: UseInputProperties<InputType>;
}
