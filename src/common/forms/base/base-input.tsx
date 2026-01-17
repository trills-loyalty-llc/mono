import { useId } from "react";
import { Label } from "../label/label";
import type BaseProperties from "./base-properties";

export const BaseInput: React.FC<BaseProperties> = ({
  label,
  type,
  useInput,
}: BaseProperties) => {
  const id = useId();

  const determineValue = (): string => {
    switch (type) {
      case "text":
      case "number": {
        return useInput.value.toString();
      }
      case "date": {
        const asDate = useInput.value as Date;
        const start = 0;
        const end = 10;
        return asDate.toISOString().slice(start, end);
      }
      default: {
        return useInput.value.toString();
      }
    }
  };

  const updateValue = (event: React.FormEvent<HTMLInputElement>): void => {
    const inputValue = event.target as HTMLInputElement;

    useInput.updateValue(inputValue.value, inputValue.validity.valid);
  };

  return (
    <div className="mb-3">
      <Label id={id} label={label} />
      <div>
        <input
          className="form-control"
          id={id}
          onFocus={updateValue}
          onInput={updateValue}
          type={type}
          value={determineValue()}
        />
      </div>
    </div>
  );
};
