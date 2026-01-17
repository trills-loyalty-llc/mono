import type Validation from "./validation";

export default interface UseInputProperties<InputType> extends Validation {
  dirty: boolean;
  updateValue: (newValue: string, isValid: boolean) => void;
  value: InputType;
}
