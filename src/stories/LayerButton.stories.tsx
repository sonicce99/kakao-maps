import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../features/control/layerControl/LayerButton";

export default {
  title: "Kakao-maps/Layer",
  component: Button,
} as ComponentMeta<typeof Button>;

export const LayerButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
