import { Button } from "../../elements/button/button";
import { ButtonType } from "../../elements/button/button-type";
import { RequiredChildrenProperties } from "../../interfaces/required-children";

export const Form: React.FC<FormProperties> = ({
  children,
  legend,
}: FormProperties) => {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <form className="box">
      <fieldset className="block">
        <legend className="block">{legend}</legend>
        {children}
      </fieldset>
      <Button
        content="Submit"
        onClickHandler={handleSubmit}
        type={ButtonType.Submit}
      />
    </form>
  );
};

interface FormProperties extends RequiredChildrenProperties {
  legend: string;
}
