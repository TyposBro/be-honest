import styled from "styled-components";
import { Star } from "@styled-icons/material";

export const PostCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;

  background-color: white;
  padding: 10px 10px;
  border-radius: 8px;

  /* Apple */

  font-family: "Andika New Basic";
  font-style: normal;
  font-weight: 700;
  /* 
  font-size: 24px;
  line-height: 39px; */
  /* identical to box height */

  color: rgba(70, 65, 65, 0.6);

  border: 1px solid rgba(0, 0, 0, 0.25);
`;
export const Avatar = styled.div`
  flex: 0.5;
  justify-content: center;
`;
export const Job = styled.div`
  flex: 1;
  justify-content: center;
`;

export const Company = styled.div`
  flex: 1;
  justify-content: center;
`;
export const Months = styled.div`
  flex: 1;
  justify-content: center;
`;
export const Rating = styled.div`
  flex: 1;
  justify-content: center;
`;

export const StarIcon = styled(Star)`
  width: 20px;
  height: 20px;
  color: yellow;
`;
