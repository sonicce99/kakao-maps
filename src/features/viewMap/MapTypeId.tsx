import React, { memo, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectMapTypeIds } from "./mapSlice";

interface Props {
  type: kakao.maps.MapTypeId;
}

const MapTypeId: React.FC<Props> = ({ type }) => {
  const mapTypeIds = useAppSelector(selectMapTypeIds);

  useEffect(() => {
    mapTypeIds.forEach((mapTypeId) => {
      window.map.addOverlayMapTypeId(mapTypeId);
    });

    return () => window.map.removeOverlayMapTypeId(type);
  });

  return null;
};

export default memo(MapTypeId);
