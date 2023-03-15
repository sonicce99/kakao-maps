import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";

// 지도 이동시키기
const Map: React.FC<Props> = ({ center, size, level }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const options = {
        center: new kakao.maps.LatLng(center.lat, center.lng),
        level,
      };

      const map = new kakao.maps.Map(ref.current, options);
    }
  }, [center, dispatch, level, ref]);

  return <Box ref={ref} width={size.width} height={size.height} />;
};

export default memo(Map);

interface Props {
  center: Center;
  size: Size;
  level: number;
}

interface Center {
  lat: number;
  lng: number;
}

interface Size {
  width: string;
  height: string;
}

const Box = styled.div<Size>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
