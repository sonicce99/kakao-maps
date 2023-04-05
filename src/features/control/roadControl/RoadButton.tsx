import { memo } from "react";
import styled from "styled-components";

interface Props {
  roadViewState: boolean;
  toggleRoadViewState: () => void;
}

const RoadButton: React.FC<Props> = ({
  roadViewState,
  toggleRoadViewState,
}) => {
  return <Button roadViewState={roadViewState} onClick={toggleRoadViewState} />;
};

export default memo(RoadButton);

interface StyleProps {
  roadViewState: boolean;
}

const Button = styled.button<StyleProps>`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-image: url(${({ theme }) => theme.url.sign});
  background-repeat: no-repeat;
  background-position: ${({ roadViewState }) =>
    roadViewState ? "left -2.8px bottom -105px" : "left -2.8px bottom -5px"};
  cursor: pointer;
`;
