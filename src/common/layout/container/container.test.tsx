import { render, screen } from "@testing-library/react";
import { Container } from "./container";

describe("container", () => {
  it("renders", () => {
    render(<Container>hello</Container>);

    expect(screen.getByText(/hello/i)).toHaveClass("container");
  });
});
