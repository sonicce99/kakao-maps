import Map from "./features/map/Map";

const App = () => {
  return (
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
      level={3} // 지도의 확대 레벨
    />
  );
};

export default App;
