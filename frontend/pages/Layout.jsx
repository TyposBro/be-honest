import { Link, Profile } from "../components";
import { Container, Content, Sidebar } from "./Layout.styled";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <Link />
        <Profile />
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
