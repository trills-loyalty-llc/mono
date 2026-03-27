import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { fn } from "storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  args: { onClickHandler: fn() },
};

export default meta;

export const Primary: StoryObj = {
  args: { content: "Basic Button" },
};
