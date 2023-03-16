import React, { memo } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectMaptype, showRoadmap, showSkymap } from "../viewMap/mapSlice";
import ViewButton from "./ViewButton";

const Switch = () => {
  const dispatch = useAppDispatch();
  const mapType = useAppSelector(selectMaptype);

  return (
    <Container>
      <ViewButton onClick={() => dispatch(showRoadmap())} mapType={mapType}>
        지도
      </ViewButton>
      <ViewButton onClick={() => dispatch(showSkymap())} mapType={!mapType}>
        스카이뷰
      </ViewButton>
    </Container>
  );
};

export default memo(Switch);

const Container = styled.div`
  width: 96px;
  height: 32px;
  background-color: white;
  border-radius: 5px;
  padding: 2px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 2px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
