import { Link } from "../components";
import { Container, Content, Sidebar } from "./Layout.styled";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <Link />
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
