import { Button } from "../../elements/button/button";
import { ButtonType } from "../../elements/button/button-type";
import type { RequiredChildrenProperties } from "../../interfaces/required-children";
import type Validation from "../hooks/validation";

export const Form: React.FC<FormProperties> = ({
  children,
  inputs,
  legend,
}: FormProperties) => {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const isDisabled = (): boolean => {
    return inputs.some((input) => !input.isValid);
  };

  return (
    <form className="rounded border shadow p-3">
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
      <Button
        content="Submit"
        onClickHandler={handleSubmit}
        type={ButtonType.Submit}
        disabled={isDisabled()}
      />
    </form>
  );
};

interface FormProperties extends RequiredChildrenProperties {
  inputs: Array<Validation>;
  legend: string;
}
