import { Container } from "./index.styled";
import { Card } from "../../components";

export const Hr = () => {
  return <Container>
      <Info />
      <CardContainer>
        <Card
          src="https://img.icons8.com/?size=512&id=30840&format=png"
          title="Current company"
          position="HR manager"
          company="Apple"
          time="48m"
        />
        <Card title="Total experience" position="HR manager" company="" time="3y" />
      </CardContainer>
  </Container>;
};

export default Hr;
