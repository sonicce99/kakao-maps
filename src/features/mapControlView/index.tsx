import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { decreaseLevel, increaseLevel } from "../viewMap/mapSlice";

// 지도 컨드롤 할 수 있는 컴포넌트
const MapControlView = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <ZoomIn onClick={() => dispatch(decreaseLevel())}>+</ZoomIn>
      <ZoomOut onClick={() => dispatch(increaseLevel())}>-</ZoomOut>
    </Container>
  );
};

export default MapControlView;

const Container = styled.div`
  position: absolute;
  top: 149px;
  right: 9px;
  z-index: 420;
  width: 38px;
`;

const ZoomIn = styled.button`
  width: 32px;
  height: 32px;
`;

const ZoomOut = styled.button`
  width: 32px;
  height: 32px;
`;
