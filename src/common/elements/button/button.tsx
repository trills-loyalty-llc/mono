/**
 * A basic button element to allow UI interaction.
 */
export const Button: React.FC<ButtonProperties> = ({
  content,
  onClickHandler,
}: ButtonProperties) => {
  return (
    <button className="button" onClick={onClickHandler}>
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
}
