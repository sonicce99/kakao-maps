import { memo, useState } from "react";
import styled, { css } from "styled-components";
import LayerButton from "./LayerButton";
import LayerModal from "./LayerModal";

const LayerControl = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleIsOn = () => setIsOn((prev) => !prev);

  return (
    <>
      <Box1>
        <LayerButton handleIsOn={handleIsOn} />
      </Box1>
      {isOn && (
        <Box2>
          <LayerModal />
        </Box2>
      )}
    </>
  );
};

export default memo(LayerControl);

const Common = css`
  position: absolute;
  z-index: 2;
`;

const Box1 = styled.div`
  ${Common}
  top: 11px;
  right: 138px;
`;

const Box2 = styled.div`
  ${Common}
  top: 60px;
  right: 88px;
`;
