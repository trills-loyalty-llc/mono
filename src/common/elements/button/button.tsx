import { ButtonType } from "./button-type";

/**
 * A basic button element to allow UI interaction.
 */
export const Button: React.FC<ButtonProperties> = ({
  content,
  disabled,
  onClickHandler,
  type = ButtonType.Button,
}: ButtonProperties) => {
  const determineType = (): "button" | "submit" => {
    switch (type) {
      case ButtonType.Button: {
        return "button";
      }
      case ButtonType.Submit: {
        return "submit";
      }
    }
  };

  return (
    <button
      className="btn btn-primary"
      disabled={disabled}
      onClick={onClickHandler}
      type={determineType()}
    >
      {content}
    </button>
  );
};

interface ButtonProperties {
  /**
   * The text content that will appear inside the button.
   */
  content: string;

  /**
   * Click handler that will be called for every click.
   * @param event A react mouse event.
   * @returns void
   */
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Designates the button type.
   */
  type?: ButtonType;

  /**
   * Designates if the button is disabled or not.
   */
  disabled?: boolean;
}
