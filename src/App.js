import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  background-color: #efefef;
  font-size: 32px;
  color: pink;
`;

function App() {
  return <Wrapper>Adam {process.env.REACT_APP_PARTY_DATE}</Wrapper>;
}

export default App;
