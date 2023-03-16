import { useAppDispatch } from "../app/hooks";
import { setLatitude, setLongitude } from "../features/viewMap/mapSlice";

// 현재 호스트의 위도와 경도를 받아옵니다.
const CurrentLocation = () => {
  const dispatch = useAppDispatch();
  if (navigator.geolocation) {
    const success = (position: GeolocationPosition) => {
      // 위도, 경도
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      dispatch(setLatitude(latitude));
      dispatch(setLongitude(longitude));
    };

    const error = () => {
      window.alert(
        "브라우저 오른쪽 상단에서 위치 정보를 켜주세요. 설정을 켜지 않으면 기본 위치에서 시작합니다."
      );
      dispatch(setLatitude(33.450701));
      dispatch(setLongitude(126.570667));
    };

    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    window.alert(
      "사용자의 웹 브라우저가 Geolocation API를 지원하지 않습니다. Chrome을 사용하세요. 기본 위치에서 시작합니다."
    );

    dispatch(setLatitude(33.450701));
    dispatch(setLongitude(126.570667));
  }
};

export default CurrentLocation;
