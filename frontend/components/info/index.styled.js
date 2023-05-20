import styled from "styled-components";

export const Container = styled.div`
  height: 270px;
  width: 100%;
  /* background: rgba(255, 255, 255, 0.5); */
  background-color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  padding: 30px 40px;
  color: black;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
`;
export const Title = styled.div`
  /* Alex Davidson */

  font-family: "Caladea";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  /* identical to box height */

  color: #000000;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;

export const Avatar = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 10px;
`;
export const Subtitle = styled.div`
  /* Software Engineer */

  font-family: "Andika New Basic";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 44px;
  /* identical to box height */

  color: rgba(70, 65, 65, 0.6);
`;

export const TagContainer = styled.div`
  display: flex;
  margin-top: 60px;
`;
export const Tag = styled.div`
  /* #JavaScript */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  height: 40px;

  background: #ffffff;
  border: 1px solid rgba(70, 65, 65, 0.6);
  border-radius: 15px;

  font-family: "Andika New Basic";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 39px;

  color: rgba(70, 65, 65, 0.6);

  :not(:first-child) {
    margin-left: 10px;
  }
`;
