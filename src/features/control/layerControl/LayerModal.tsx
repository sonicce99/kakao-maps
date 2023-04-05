import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { handleMapTypeId, selectMapTypeIds } from "../../viewMap/mapSlice";

const LayerModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const mapTypeIds = useAppSelector(selectMapTypeIds);

  return (
    <Container>
      <Title>지도 설정</Title>
      <Ul>
        <Li>
          <Traffic
            isOn={
              mapTypeIds.includes(kakao.maps.MapTypeId.TRAFFIC) ? true : false
            }
            onClick={() =>
              dispatch(handleMapTypeId(kakao.maps.MapTypeId.TRAFFIC))
            }
          />
          <Text>교통정보</Text>
        </Li>

        <Li>
          <Usedistrict
            isOn={
              mapTypeIds.includes(kakao.maps.MapTypeId.USE_DISTRICT)
                ? true
                : false
            }
            onClick={() =>
              dispatch(handleMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT))
            }
          />
          <Text>지적편집도</Text>
        </Li>

        <Li>
          <Terrain
            isOn={
              mapTypeIds.includes(kakao.maps.MapTypeId.TERRAIN) ? true : false
            }
            onClick={() =>
              dispatch(handleMapTypeId(kakao.maps.MapTypeId.TERRAIN))
            }
          />
          <Text>지형도</Text>
        </Li>

        <Li>
          <Bike
            isOn={
              mapTypeIds.includes(kakao.maps.MapTypeId.BICYCLE) ? true : false
            }
            onClick={() =>
              dispatch(handleMapTypeId(kakao.maps.MapTypeId.BICYCLE))
            }
          />
          <Text>자전거</Text>
        </Li>
      </Ul>
    </Container>
  );
};

export default LayerModal;

interface StyleProps {
  isOn: boolean;
}

const Container = styled.div`
  width: 286px;
  height: 452px;
  padding: 2px 30px 18px;
  box-shadow: 1px 1px 1px 1px rgba(46, 48, 46, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.p`
  height: 19px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px 0 11px;

  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  width: 25%;
  cursor: pointer;
`;

const Common = css`
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  background-image: url(${({ theme }) => theme.url.sign});
`;

// 교통정보
const Traffic = styled.div<StyleProps>`
  ${Common}
  background-position: -300px ${({ isOn }) => (isOn ? "-200px" : "-100px")};
`;

// 지적편집도
const Usedistrict = styled.div<StyleProps>`
  ${Common}
  background-position: -350px ${({ isOn }) => (isOn ? "-250px" : "-150px")};
`;

// 지형도
const Terrain = styled.div<StyleProps>`
  ${Common}
  background-position: -300px ${({ isOn }) => (isOn ? "-250px" : "-150px")};
`;

// 자전거
const Bike = styled.div<StyleProps>`
  ${Common}
  background-position: -450px ${({ isOn }) => (isOn ? "-200px" : "-100px")};
`;

const Text = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  white-space: nowrap;
`;
