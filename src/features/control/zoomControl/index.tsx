import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../app/hooks";
import ZoomButton from "./ZoomButton";
import { decreaseLevel, increaseLevel } from "../../viewMap/mapSlice";

// 지도의 level을 컨드롤 할 수 있는 컴포넌트
const ZoomControl = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <ZoomButton onClick={() => dispatch(decreaseLevel())}>+</ZoomButton>
      <ZoomButton onClick={() => dispatch(increaseLevel())}>-</ZoomButton>
    </Container>
  );
};

export default ZoomControl;

const Container = styled.div`
  position: absolute;
  top: 149px;
  right: 9px;
  z-index: 420;
  width: 38px;
  border: 3px solid red;
`;
