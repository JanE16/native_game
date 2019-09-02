import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Keyboard
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";

const StartGameScreen = ({setUserNumber, started, setStarted}) => {
  const [confirmed, setConfirmed] = useState(false);
  
  const [disableStatus, setDisableStatus] = useState(true);

  const confirmedHandler = () => {
    setConfirmed(false);
    setDisableStatus(true)
  };

  const startGameHandler = () => {
    setStarted(true)
  }

  let startGameButton;
  confirmed && !started
    ? (startGameButton = (
        <StyleStartButton onPress={startGameHandler}>
          <Text>START GAME!</Text>
        </StyleStartButton>
      ))
    : null;
  let chooseAgainButton;
  confirmed && !started
    ? (chooseAgainButton = (
        <StyleChooseAgainButton onPress={confirmedHandler}>
          <Text>CHOOSE AGAIN!</Text>
        </StyleChooseAgainButton>
      ))
    : null;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <StyledScreen>
        <StyledText>Start a new game !</StyledText>
        <Card
          confirmed={confirmed}
          setConfirmed={setConfirmed}
          disableStatus={disableStatus}
          setDisableStatus={setDisableStatus}
          setUserNumber={setUserNumber}
        />
        {startGameButton}
        {chooseAgainButton}
      </StyledScreen>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const StyledScreen = styled(View)`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

const StyledText = styled(Text)`
  margin-bottom: 30px;
`;

const StyleStartButton = styled(TouchableHighlight)`
  margin-top: 20px;
  padding: 10px;
  width: 150px;
  height: 50px;
  background: blueviolet;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const StyleChooseAgainButton = styled(TouchableHighlight)`
  margin-top: 20px;
  padding: 10px;
  width: 150px;
  height: 50px;
  background: red;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;
