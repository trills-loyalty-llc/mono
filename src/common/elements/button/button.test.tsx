import { render, screen } from "@testing-library/react";
import { Button } from "./button";
import userEvent from "@testing-library/user-event";

describe("button", () => {
  it("has correct content", () => {
    render(<Button onClickHandler={vitest.fn()} content="button" />);

    expect(screen.getByRole("button", { name: /button/i })).toBeInTheDocument();
  });

  it("has correct default class", () => {
    render(<Button onClickHandler={vitest.fn()} content="button" />);

    expect(screen.getByRole("button", { name: /button/i })).toHaveClass(
      "button",
    );
  });

  it("onClickHandler is called correctly", async () => {
    const user = userEvent.setup();

    const handler = vitest.fn();

    render(<Button onClickHandler={handler} content="button" />);

    await user.click(screen.getByRole("button", { name: /button/i }));

    expect(handler).toHaveBeenCalled();
  });
});
