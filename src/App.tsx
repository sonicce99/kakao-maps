import styled from "styled-components";
import { useAppSelector } from "./app/hooks";
import ZoomControl from "./features/control/zoomControl";
import Map from "./features/viewMap";
import {
  selectLatitude,
  selectLevel,
  selectLongitude,
  selectMaptype,
  selectMapTypeIds,
  selectRoadViewState,
} from "./features/viewMap/mapSlice";
import currentLocation from "./utils/currentLocation";
import MapTypeControl from "./features/control/mapTypeControl";
import { memo, useRef, useState } from "react";
import LayerControl from "./features/control/layerControl";
import RoadControl from "./features/control/roadControl";
import MapTypeId from "./features/viewMap/MapTypeId";

const App = () => {
  currentLocation();

  // 지도의 레벨을 나타냅니다.
  const level = useAppSelector(selectLevel);

  // Host의 위도를 나타냅니다.
  const latitude = useAppSelector(selectLatitude);

  // Host의 경도를 나타냅니다.
  const longitude = useAppSelector(selectLongitude);

  // 지도가 일반뷰일지, 스카이뷰일지를 나타냅니다.
  const maptype = useAppSelector(selectMaptype);

  const mapTypeIds = useAppSelector(selectMapTypeIds);

  // 로드뷰 상태
  const roadViewState = useAppSelector(selectRoadViewState);

  if (!(latitude && latitude)) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Map
        center={{
          // 지도의 중심좌표
          lat: latitude,
          lng: longitude,
        }}
        size={{
          // 지도의 크기
          width: "100vw",
          height: "100vh",
        }}
        level={level} // 지도의 확대 레벨
        maptype={maptype}
        roadViewState={roadViewState}
      >
        {mapTypeIds.map((mapTypeId) => (
          <MapTypeId type={mapTypeId} key={mapTypeId} />
        ))}
      </Map>
      <MapTypeControl />
      <LayerControl />
      <ZoomControl />
      <RoadControl />
    </Container>
  );
};

export default memo(App);

const Container = styled.div`
  width: 100vh;
  height: 100vh;
`;
