import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(View)`
  background-color: #aa3939;
  height : 100px;
  justify-content: flex-end;
  align-items : center;
`;

const StyledTitle = styled(Text)`
  font-size : 20px;
  font-weight : 700;
  font-style : italic;
  padding-bottom : 15px;
`;
