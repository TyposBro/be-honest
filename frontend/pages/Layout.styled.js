import styled, { css } from "styled-components";

const _layout = css`
  * {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(208, 253, 240, 0.9);
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
