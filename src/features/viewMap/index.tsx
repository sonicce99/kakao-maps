import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";

interface Props {
  center: Center;
  size: Size;
  level: number;
  maptype: boolean;
}

interface Center {
  lat: number;
  lng: number;
}

interface Size {
  width: string;
  height: string;
}

// 지도 이동시키기
const Map: React.FC<Props> = ({ center, size, level, maptype }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const options = {
        center: new kakao.maps.LatLng(center.lat, center.lng),
        level,
      };

      const map = new kakao.maps.Map(ref.current, options);
      // console.log(map.getBounds());

      // map.addOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);

      // 기본 뷰
      if (maptype) {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
      }

      // 스카이 뷰
      else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
      }
    }
  }, [center, dispatch, level, maptype, ref]);

  return <Box ref={ref} width={size.width} height={size.height} />;
};

export default memo(Map);

const Box = styled.div<Size>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
