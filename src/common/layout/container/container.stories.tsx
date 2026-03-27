import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "../..";

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;

export const Primary: StoryObj = {
  args: {
    children: <p>Hello!</p>,
  },
};
