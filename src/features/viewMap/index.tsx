import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { setLevel } from "./mapSlice";

interface Props {
  center: Center;
  size: Size;
  level: number;
  maptype: boolean;
  trafficState: boolean;
  usedistrictState: boolean;
  terrainState: boolean;
  bikeState: boolean;
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
const Map: React.FC<Props> = ({
  center,
  size,
  level,
  maptype,
  trafficState,
  usedistrictState,
  terrainState,
  bikeState,
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

      kakao.maps.event.addListener(map, "zoom_changed", function () {
        // 지도의 현재 레벨을 얻어옵니다
        const currLevel = map.getLevel();
        dispatch(setLevel(currLevel));
      });

      // 기본 뷰
      if (maptype) {
        map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
      }

      // 스카이 뷰
      else {
        map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
      }

      if (trafficState) {
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
      }

      if (usedistrictState) {
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT);
      }

      if (terrainState) {
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
      }

      if (bikeState) {
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.BICYCLE);
      }
    }
  }, [
    bikeState,
    center,
    dispatch,
    level,
    maptype,
    ref,
    terrainState,
    trafficState,
    usedistrictState,
  ]);

  return <Box ref={ref} width={size.width} height={size.height} />;
};

export default memo(Map);

const Box = styled.div<Size>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
