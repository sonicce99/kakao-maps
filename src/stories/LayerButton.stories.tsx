import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../features/control/layerControl/LayerButton";

export default {
  title: "Kakao-maps/Layer",
  component: Button,

  argTypes: {
    size: { type: "number", min: 20, max: 50, step: 1 },
  },
} as ComponentMeta<typeof Button>;

export const LayerButton: ComponentStory<typeof Button> = (args) => <Button />;
