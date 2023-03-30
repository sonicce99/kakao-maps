import styled from "styled-components";
import { useAppSelector } from "./app/hooks";
import ZoomControl from "./features/control/zoomControl";
import Map from "./features/viewMap";
import {
  selectBikeState,
  selectLatitude,
  selectLevel,
  selectLongitude,
  selectMaptype,
  selectTerrainState,
  selectTrafficState,
  selectUsedistrictState,
} from "./features/viewMap/mapSlice";
import currentLocation from "./utils/currentLocation";
import MapTypeControl from "./features/control/mapTypeControl";
import { memo } from "react";
import LayerControl from "./features/control/layerControl";

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

  // 교통정보 상태
  const trafficState = useAppSelector(selectTrafficState);

  // 지적편집도 상태
  const usedistrictState = useAppSelector(selectUsedistrictState);

  // 지형도 상태
  const terrainState = useAppSelector(selectTerrainState);

  // 자전거 상태
  const bikeState = useAppSelector(selectBikeState);

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
        trafficState={trafficState}
        usedistrictState={usedistrictState}
        terrainState={terrainState}
        bikeState={bikeState}
      />
      <MapTypeControl />
      <LayerControl />
      <ZoomControl />
    </Container>
  );
};

export default memo(App);

const Container = styled.div`
  width: 100vh;
  height: 100vh;
`;
