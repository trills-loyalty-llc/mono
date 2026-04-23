import { TextInput } from "../../derived/text/text-input";
import type UseInputProperties from "../../hooks/use-input-properties";

export const IdentifierInput: React.FC<IdentifierInputProperties> = ({
  useInput,
}: IdentifierInputProperties) => {
  return (
    <TextInput
      useInput={useInput}
      label="Identifier"
      pattern={"^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}
    />
  );
};

interface IdentifierInputProperties {
  useInput: UseInputProperties<string>;
}
