import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #9e0437;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>500 TL üzeri alışverişinizde KARGO ücretsiz!</Container>;
};

export default Announcement;
