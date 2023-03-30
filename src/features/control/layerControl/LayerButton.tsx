import { memo } from "react";
import styled from "styled-components";

interface Props {
  handleIsOn: () => void;
}

const LayerButton: React.FC<Props> = ({ handleIsOn }) => {
  return <Button onClick={handleIsOn} />;
};

export default memo(LayerButton);

const Button = styled.button`
  width: 37px;
  height: 37px;
  border-radius: 3px;
  background-image: url(${({ theme }) => theme.url.sign});
  background-repeat: no-repeat;
  background-position: left -52px bottom -104px;
  cursor: pointer;
`;
