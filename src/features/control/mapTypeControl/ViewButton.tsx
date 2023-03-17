import React, { memo, ReactNode } from "react";
import styled from "styled-components";

interface Props {
  mapType: boolean;
  children: ReactNode;
  onClick: () => void;
}

type StyleProps = Pick<Props, "mapType">;

const ViewButton: React.FC<Props> = ({ mapType, onClick, children }) => {
  return (
    <Button onClick={onClick} mapType={mapType}>
      {children}
    </Button>
  );
};

export default memo(ViewButton);

const Button = styled.button<StyleProps>`
  background: ${({ mapType, theme }) =>
    mapType ? theme.colors.primary : theme.colors.white};
  color: ${({ mapType, theme }) =>
    mapType ? theme.colors.white : theme.colors.black};
  font-weight: ${({ mapType }) => (mapType ? "bold" : "normal")};
  height: 32px;

  cursor: pointer;
  border-radius: 3px;
`;
