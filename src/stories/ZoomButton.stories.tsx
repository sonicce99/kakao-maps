import { ComponentStory, ComponentMeta } from "@storybook/react";
import ZoomButton from "../features/zoomControl/ZoomButton";

export default {
  title: "Kakao-maps/Button",
  component: ZoomButton,

  argTypes: {
    size: { type: "number", min: 20, max: 50, step: 1 },
  },
} as ComponentMeta<typeof ZoomButton>;

const Template: ComponentStory<typeof ZoomButton> = (args) => (
  <ZoomButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 32,
};
