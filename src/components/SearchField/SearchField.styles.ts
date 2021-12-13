import styled from "styled-components";

export const SearchArea = styled.div`
  margin: 20px 20px;
  display: flex;
`;

export const SearchSelect = styled.div`
  width: 100%;
  border-radius: 20px;
  background-color: #FFF;
`;

export const TextField = styled.p`
  font-size: 28px;
`;

export const LanguageOption = styled.select`
  width: 100%;
  
  option {
    color: black;
  }
`;

export const SearchButton = styled.div`
  width: 150px;
  height: 150px;
  background-color: #84E0BE;
  width: 95px;
  height: 75px;
  border-radius: 20px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;

  .MuiSvgIcon-root {
    font-size: 40px !important;
  }

`;
