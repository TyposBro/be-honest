import {
  Container,
  Image,
  Logo,
  _link,
  _Home,
  _Notification,
  _Search,
  _Hash,
  _Messenger,
  _Bookmark,
} from "./index.styled";
import logo from "../../assets/logo.jpg";

const Link = () => {
  return (
    <Container>
      <Logo>
        <Image src={logo} />
      </Logo>

      <_link to="/">
        <_Home /> Home
      </_link>
      <_link to="/notification">
        <_Notification /> Notification
      </_link>
      <_link to="/search">
        <_Search />
        Search
      </_link>
      <_link to="/messages">
        <_Messenger /> Messages
      </_link>
      <_link to="/saved">
        <_Bookmark /> Saved
      </_link>
      <_link to="/explore">
        <_Hash /> Explore
      </_link>
    </Container>
  );
};

export default Link;
