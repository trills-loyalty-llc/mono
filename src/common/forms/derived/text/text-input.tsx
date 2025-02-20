import { BaseInput } from "../../base/base-input";
import DerivedProperties from "../interfaces/derived-properties";

export const TextInput: React.FC<DerivedProperties> = ({
  label,
  useInput,
}: DerivedProperties) => {
  return <BaseInput type="text" label={label} useInput={useInput} />;
};
