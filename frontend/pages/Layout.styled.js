import styled, { css } from "styled-components";

const _layout = css`
  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(232, 248, 244, 0.99);
  /* background-color: rgba(245, 245, 247, 0.95); */
  padding: 20px;
  width: 100vw;
  height: 100%;
  ${_layout}
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 20px;
`;
export const Sidebar = styled.div``;
