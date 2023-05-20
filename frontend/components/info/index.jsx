import {
  Container,
  Main,
  Title,
  Avatar,
  InfoContainer,
  Subtitle,
  TagContainer,
  Tag,
} from "./index.styled";

export const Info = () => {
  return (
    <Container>
      <Main>
        <Avatar src="https://avatars.githubusercontent.com/u/1024025?v=4" alt="Alex Davidson" />
        <InfoContainer>
          <Title>Alex Davidson</Title>
          <Subtitle>Software Engineer</Subtitle>
          <Subtitle>Web3/Crypto enthusiast</Subtitle>
        </InfoContainer>
      </Main>
      <TagContainer>
        <Tag>#Web3</Tag>
        <Tag>#Near</Tag>
        <Tag>#JavaScript</Tag>
        <Tag>#React</Tag>
      </TagContainer>
    </Container>
  );
};

export default Info;
