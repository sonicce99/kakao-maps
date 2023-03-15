import styled from "styled-components";
import { useAppSelector } from "./app/hooks";
import MapControlView from "./features/mapControlView";
import Map from "./features/viewMap";
import { selectLevel } from "./features/viewMap/mapSlice";

const App = () => {
  const level = useAppSelector(selectLevel);

  return (
    <Container>
      <Map
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        size={{
          // 지도의 크기
          width: "100vw",
          height: "100vh",
        }}
        level={level} // 지도의 확대 레벨
      />
      <MapControlView />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vh;
  height: 100vh;
`;
