import styled from "styled-components";

const LayerModal = () => {
  return (
    <Container>
      <Title>지도 설정</Title>
    </Container>
  );
};

export default LayerModal;

const Container = styled.div`
  width: 224px;
  height: 452px;
  padding: 2px 30px 18px;
  border: 3px solid red;
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
