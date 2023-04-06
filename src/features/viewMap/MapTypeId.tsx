import React, { memo, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectMap } from "./mapSlice";

interface Props {
  type: kakao.maps.MapTypeId;
}

const MapTypeId: React.FC<Props> = ({ type }) => {
  const map = useAppSelector(selectMap);

  useEffect(() => {
    if (map) {
      map.addOverlayMapTypeId(type);

      return () => map.removeOverlayMapTypeId(type);
    }
  }, [map, type]);

  return null;
};

export default memo(MapTypeId);
