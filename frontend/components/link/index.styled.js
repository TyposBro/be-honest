import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Home, Hash } from "@styled-icons/boxicons-regular";
import { Messenger } from "@styled-icons/boxicons-logos";
import { Notifications } from "@styled-icons/material-sharp";
import { BookmarkFill, Search } from "@styled-icons/bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 350px;
  height: 450px;
  border-radius: 25px;
  padding: 20px 30px;
`;

export const Logo = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;
export const _link = styled(Link)`
  /* Home */
  margin: 7px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  display: flex;
  align-items: center;

  text-decoration: none;

  color: rgba(70, 65, 65, 0.6);
`;

const icon = css`
  /* Vector */
  width: 24px;
  height: 24px;
  color: rgba(70, 65, 65, 0.6);
`;

export const _Bookmark = styled(BookmarkFill)`
  ${icon}
`;
export const _Hash = styled(Hash)`
  ${icon}
`;
export const _Home = styled(Home)`
  ${icon}
`;
export const _Notification = styled(Notifications)`
  ${icon}
`;
export const _Messenger = styled(Messenger)`
  ${icon}
`;

export const _Search = styled(Search)`
  ${icon}
`;
