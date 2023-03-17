import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  size?: number;
  children: ReactNode;
  onClick?: () => void;
}

const ZoomButton: React.FC<Props> = ({ size, children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ZoomButton;

const Button = styled.button`
  width: 32px;
  height: 32px;
`;
