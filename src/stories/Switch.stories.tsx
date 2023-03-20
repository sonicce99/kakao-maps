import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "../features/control/mapTypeControl/Switch";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { ReactNode } from "react";
import { store } from "../app/store";

// interface Props {
//   MockedState: {
//     maptype: boolean;
//   };
//   children: ReactNode;
// }

// const MockedState = {
//   maptype: true,
// };

// const Mockstore: React.FC<Props> = ({ MockedState, children }) => (
//   <Provider
//     store={configureStore({
//       reducer: {
//         mapSlice: createSlice({
//           name: "map",
//           initialState: MockedState,
//           reducers: {
//             showRoadmap: (state, action) => {
//               state.maptype = true;
//             },

//             showSkymap: (state, action) => {
//               state.maptype = false;
//             },
//           },
//         }).reducer,
//       },
//     })}
//   >
//     {children}
//   </Provider>
// );

export default {
  title: "Kakao-maps/Switch",
  component: Switch,
  excludeStories: /.*MockedState$/,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],

  // argTypes: {
  //   size: { type: "number", min: 20, max: 50, step: 1 },
  // },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch />;

export const Default = Template.bind({});
// Default.decorators = [
//   (story) => <Mockstore MockedState={MockedState}>{story()}</Mockstore>,
// ];
