import { Link } from "react-router-dom";
import styled from "styled-components";
import { Home } from "@styled-icons/boxicons-regular";
import { Messenger } from "@styled-icons/boxicons-logos";
import { Notifications } from "@styled-icons/material-sharp";
import { BookmarkFill } from "@styled-icons/bootstrap";

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

  color: rgba(70, 65, 65, 0.6);
`;

export const _Home = styled(Link)``;
