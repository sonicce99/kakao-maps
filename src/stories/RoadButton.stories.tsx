import { ComponentStory, ComponentMeta } from "@storybook/react";
import RoadButton from "../features/control/roadControl/RoadButton";

export default {
  title: "Kakao-maps/RoadButton",
  component: RoadButton,

  //   argTypes: {
  //     size: { type: "number", min: 20, max: 50, step: 1 },
  //   },
} as ComponentMeta<typeof RoadButton>;

const Template: ComponentStory<typeof RoadButton> = (args) => (
  <RoadButton {...args} />
);

export const Default = Template.bind({});
// Default.args = {
//   size: 32,
// };
