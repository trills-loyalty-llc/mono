import { useState } from "react";
import type UseInputProperties from "./use-input-properties";

export default function useInput<InputType>(
  defaultInput: InputType,
  mappingFunction: (value: string) => InputType,
): UseInputProperties<InputType> {
  const [value, setValue] = useState<InputType>(defaultInput);
  const [isValid, setValid] = useState<boolean>(false);
  const [dirty, setDirty] = useState<boolean>(false);

  const updateValue = (newValue: string, isValid: boolean): void => {
    setValue(mappingFunction(newValue));
    setValid(isValid);
    setDirty(true);
  };

  return { dirty, isValid, updateValue, value };
}
