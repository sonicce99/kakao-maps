import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  handleBikeState,
  handleTerrainState,
  handleTrafficState,
  handleUsedistrictState,
  selectBikeState,
  selectTerrainState,
  selectTrafficState,
  selectUsedistrictState,
} from "../../viewMap/mapSlice";

const LayerModal: React.FC = () => {
  const dispatch = useAppDispatch();

  // 교통정보 상태
  const trafficState = useAppSelector(selectTrafficState);

  // 지적편집도 상태
  const usedistrictState = useAppSelector(selectUsedistrictState);

  // 지형도 상태
  const terrainState = useAppSelector(selectTerrainState);

  // 자전거 상태
  const bikeState = useAppSelector(selectBikeState);

  return (
    <Container>
      <Title>지도 설정</Title>
      <Ul>
        <Li>
          <Traffic
            isOn={trafficState}
            onClick={() => dispatch(handleTrafficState())}
          />
          <Text>교통정보</Text>
        </Li>

        <Li>
          <Usedistrict
            isOn={usedistrictState}
            onClick={() => dispatch(handleUsedistrictState())}
          />
          <Text>지적편집도</Text>
        </Li>

        <Li>
          <Terrain
            isOn={terrainState}
            onClick={() => dispatch(handleTerrainState())}
          />
          <Text>지형도</Text>
        </Li>

        <Li>
          <Bike isOn={bikeState} onClick={() => dispatch(handleBikeState())} />
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
