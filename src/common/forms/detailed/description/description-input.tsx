import { TextInput } from "../../derived/text/text-input";
import type UseInputProperties from "../../hooks/use-input-properties";

export const DescriptionInput: React.FC<DescriptionInputProperties> = ({
  useInput,
}: DescriptionInputProperties) => {
  return <TextInput label="Description" useInput={useInput} />;
};

interface DescriptionInputProperties {
  useInput: UseInputProperties<string>;
}
