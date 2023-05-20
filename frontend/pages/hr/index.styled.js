import styled from "styled-components";

export const SearchContainer = styled.div`
  ${'' /* width: 100%; */}
  height: 100%;
  display: flex;
  flex-direction: column;

`;

export const SearchRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.input`
  flex: 4;
  border-radius: 8px;
  margin-right: 5px;
  background-color: white;
`;

export const SearchRowButtonH = styled.div`
  flex: 1;
  background: #07FF3E;
  text-align: center;
  text-justify: center;
  color: black;
  border-radius: 8px;
`;

export const SearchRowButtonF = styled.div`
  width: 60px;
  background: pink;
  text-align: center;
  text-justify: center;

  color: black;
  border-radius: 8px;
`;

export const NameField = styled.div`
  display:flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: white;
  color: black;
  padding: 8px 8px;
  
`;

