import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "../features/control/layerControl/LayerModal";

export default {
  title: "Kakao-maps/Layer",
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const LayerModal: ComponentStory<typeof Modal> = (args) => <Modal />;
