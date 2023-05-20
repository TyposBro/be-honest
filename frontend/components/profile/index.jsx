import { Container, Image, Subtitle, Title } from "./index.styled";

export const Profile = () => {
  return (
    <Container>
      <Image src="https://avatars.githubusercontent.com/u/54050745?v=4" />
      <Title>Angela Yu</Title>
      <Subtitle>Hr @Coupang</Subtitle>
    </Container>
  );
};

export default Profile;
