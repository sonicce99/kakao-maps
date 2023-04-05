import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  handleRoadViewState,
  selectRoadViewState,
} from "../../viewMap/mapSlice";
import RoadButton from "./RoadButton";

const RoadControl = () => {
  const dispatch = useAppDispatch();
  const roadViewState = useAppSelector(selectRoadViewState);

  const toggleRoadViewState = () => dispatch(handleRoadViewState());

  return (
    <Container>
      <RoadButton
        roadViewState={roadViewState}
        toggleRoadViewState={toggleRoadViewState}
      />
    </Container>
  );
};

export default RoadControl;

const Container = styled.div`
  position: absolute;
  z-index: 2;
  top: 11px;
  right: 186px;
`;
