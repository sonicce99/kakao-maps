import React, { memo, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../app/hooks";

// import { setLevel } from "./mapSlice";

interface Props {
  center: Center;
  size: Size;
  level: number;
  maptype: boolean;
  roadViewState: boolean;
  children: ReactNode;
}

interface Center {
  lat: number;
  lng: number;
}

interface Size {
  width: string;
  height: string;
}

declare global {
  interface Window {
    map: kakao.maps.Map;
  }
}

// 지도 이동시키기
const Map: React.FC<Props> = ({
  center,
  size,
  level,
  maptype,
  roadViewState,
  children,
}) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const options = {
        center: new kakao.maps.LatLng(center.lat, center.lng),
        level,
      };

      // 지도 객체 생성
      const map = new kakao.maps.Map(ref.current, options);
      window.map = map;

      // kakao.maps.event.addListener(map, "zoom_changed", function () {
      //   // 지도의 현재 레벨을 얻어옵니다
      //   const currLevel = map.getLevel();
      //   dispatch(setLevel(currLevel));
      // });

      // 기본 뷰
      if (maptype) {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
      }

      // 스카이 뷰
      else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
      }
    }
  }, [center, dispatch, level, maptype, ref, roadViewState]);

  return (
    <Box ref={ref} width={size.width} height={size.height}>
      {children}
    </Box>
  );
};

export default memo(Map);

const Box = styled.div<Size>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
