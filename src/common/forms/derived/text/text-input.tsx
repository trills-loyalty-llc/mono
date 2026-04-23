import { BaseInput } from "../../base/base-input";
import type DerivedProperties from "../interfaces/derived-properties";

export const TextInput: React.FC<DerivedProperties> = ({
  label,
  pattern,
  useInput,
}: DerivedProperties) => {
  return (
    <BaseInput
      type="text"
      label={label}
      pattern={pattern}
      useInput={useInput}
    />
  );
};
