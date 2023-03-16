import React from "react";
import styled from "styled-components";
import Switch from "./Switch";

const MapTypeControl = () => {
  return (
    <Container>
      <Switch />
    </Container>
  );
};

export default MapTypeControl;

const Container = styled.div`
  position: absolute;
  top: 11px;
  right: 234px;
  z-index: 2;
`;
