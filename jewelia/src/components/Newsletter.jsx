import { RiSendPlaneFill } from "react-icons/ri";
import styled from "styled-components";
import { mobile } from "../responsive";
import video from "../assets/video.mp4";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  z-index: 100;
  backdrop-filter: blur(1.5px);
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
  z-index: 100;
  backdrop-filter: blur(1.5px);
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "100%" })}
  z-index: 100;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  z-index: 100;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #da0049;
  color: white;
  z-index: 100;
  cursor: pointer;
`;

const Video = styled.video`
    width: 100%;
    height: 60%;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    opacity: 65%;
    mix-blend-mode: multiply;
    
`

const Newsletter = () => {
  return (
    <Container>
      <Video video src={video} loop autoPlay muted type="video/mp4"></Video>
      <Title>Bültenimize abone olun!</Title>
      <Desc>En yeni ürünlerden ilk senin haberin olsun.</Desc>
      <InputContainer>
        <Input placeholder="E-mail adresinizi yazınız." />
        <Button>
          <RiSendPlaneFill size={22} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
