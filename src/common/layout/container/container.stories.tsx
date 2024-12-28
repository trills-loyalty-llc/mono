import { Meta, StoryObj } from "@storybook/react";
import { Container } from "../..";

const meta: Meta<typeof Container> = {
  component: Container,
  tags: ["autodocs"],
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: <p>Hello!</p>,
  },
};
