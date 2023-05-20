import { Card } from "../../components";
import { CardContainer, Container } from "../profile/index.styled";
import {
  Container as InfoBlock,
  Main,
  Title,
  Avatar,
  InfoContainer,
  Subtitle,
  TagContainer,
  Tag,
} from "../../components/info/index.styled";
import {
  SearchContainer,
  Search,
  SearchRow,
  SearchRowButtonH,
  SearchRowButtonF,
  NameField,
  Row,
  NameField,
} from "./index.styled";

export const Hr = () => {
  var thread = {
    people: [
      { name: "Kim Dong Un", position: "SWE" },
      { name: "Kim Aibek", position: "UI/UX designer" },
      { name: "John Fish", position: "Product manager" },
    ],
  };
  return (
    <Container>
      <InfoBlock>
        <Main>
          <Avatar
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="AI avatar"
            width="100"
          />
          <InfoContainer>
            <Title>Angela Yu</Title>
            <Subtitle>HR maanager</Subtitle>
            <Subtitle>Making career life of colleagues better! </Subtitle>
          </InfoContainer>
        </Main>
        <TagContainer>
          <Tag>#CertifiedSpecialist</Tag>
          <Tag>#MicrosoftExcel</Tag>
        </TagContainer>
      </InfoBlock>
      <CardContainer>
        <Card
          src="https://img.icons8.com/?size=512&id=30840&format=png"
          title="Current company"
          position="HR manager"
          company="Apple"
          time="36m"
        />
        <Card title="Total experience" position="HR manager" company="" time="3y" />
      </CardContainer>
      <SearchContainer>
        <SearchRow>
          <Search></Search>
          <SearchRowButtonH>Add Employee</SearchRowButtonH>
        </SearchRow>
        <NameField>
          {thread.people.map((item, i) => (
            <Row key={i}>
              <div>{item.name}</div>
              <div>{item.position}</div>
              <SearchRowButtonF key={i}>Fire</SearchRowButtonF>
            </Row>
          ))}
        </NameField>
      </SearchContainer>
    </Container>
  );
};

export default Hr;
