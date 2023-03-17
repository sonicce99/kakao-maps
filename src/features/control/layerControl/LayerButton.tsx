import styled from "styled-components";

const LayerButton = () => {
  return <Button></Button>;
};

export default LayerButton;

const Button = styled.button`
  width: 38px;
  height: 38px;
  background-image: url(${({ theme }) => theme.url.sign});
  background-repeat: no-repeat;
  background-position: left -52px bottom -104px;
  cursor: pointer;
`;
