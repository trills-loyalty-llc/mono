import { useState } from "react";
import type UseInputProperties from "./use-input-properties";

/**
 *
 * @param defaultInput
 * @param mappingFunction
 */
export default function useInput<InputType>(
  defaultInput: InputType,
  mappingFunction: (value: string) => InputType,
): UseInputProperties<InputType> {
  const [value, setValue] = useState(defaultInput);
  const [isValid, setValid] = useState(false);
  const [dirty, setDirty] = useState(false);

  const updateValue = (newValue: string, isValid: boolean): void => {
    setValue(mappingFunction(newValue));
    setValid(isValid);
    setDirty(true);
  };

  return { dirty, isValid, updateValue, value };
}
