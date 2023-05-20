import { Container, Image, Logo, _link } from "./index.styled";

const Link = () => {
  return (
    <Container>
      <Logo>
        <Image src="https://img.icons8.com/?size=512&id=30840&format=png" />
      </Logo>

      <_link to="/">Home</_link>
      <_link to="/notification">Notification</_link>
      <_link to="/search">Search</_link>
      <_link to="/messages">Messages</_link>
      <_link to="/saved">Saved</_link>
      <_link to="/explore">Explore</_link>
    </Container>
  );
};

export default Link;
