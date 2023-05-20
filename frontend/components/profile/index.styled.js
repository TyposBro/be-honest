import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  font-family: "Andika New Basic";
  font-style: normal;
  font-weight: 700;
  color: rgba(70, 65, 65, 0.6);
  border: 1px solid #ffffff;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Title = styled.div`
  /* Angela Yu */

  font-family: "Andika New Basic";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  /* identical to box height */

  color: #000000;
`;
export const Subtitle = styled.div`
  /* HR at Coupang */

  font-family: "Andika New Basic";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.6);
`;
