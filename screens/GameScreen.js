import React, { useState, useEffect } from "react";
import { View, Text, Button, Alert, TouchableHighlight } from "react-native";
import styled from "styled-components";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return random;
};

const GameScreen = ({ userNumber, setStarted }) => {
  const [currentGues, setCurrentGues] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  const [gameInfo, setGameInfo] = useState(
    userNumber > currentGues ? "Try a higher number" : "Try a lower number"
  );
  const [newMin, setNewMin] = useState(1);
  const [newMax, setNewMax] = useState(100);
  const [playAgain, setPlayAgain] = useState(false);

  const newGuesHandler = () => {
    if (userNumber > currentGues) {
      setCurrentGues(generateRandomBetween(newMin, newMax, currentGues));
    }
    if (userNumber < currentGues) {
      setCurrentGues(generateRandomBetween(newMin, newMax, currentGues));
    }
  };

  const newGameHandler = () => {
    setStarted(false)
  }

  useEffect(() => {
    if (userNumber > currentGues) {
      setNewMin(currentGues);
      setGameInfo("Try a higher number");
    }
    if (userNumber < currentGues) {
      setNewMax(currentGues);
      setGameInfo("Try a lower number");
    }
    if (userNumber === currentGues) {
      setGameInfo("koniec gry niesamowite");
      setPlayAgain(true)
    }
  }, [currentGues]);

  return (
    <View style={{ alignItems: "center" }}>
      <StyledNumberContainer
        style={{
          elevation: 9,
          shadowColor: "black",
          shadowOffset: { width: 1, height: 5 },
          shadowOpacity: 0.4,
          shadowRadius: 6
        }}
      >
        <Text>your number is</Text>
        <Text>{userNumber}</Text>
      </StyledNumberContainer>
      <StyledNumberContainer
        style={{
          elevation: 9,
          shadowColor: "black",
          shadowOffset: { width: 1, height: 5 },
          shadowOpacity: 0.4,
          shadowRadius: 6
        }}
      >
        <Text>Oponent's Guess</Text>
        <Text>{currentGues}</Text>
      </StyledNumberContainer>
      <StyledHintHeader>{gameInfo}</StyledHintHeader>
      {!playAgain ?
        <StyledFuckingButton onPress={newGuesHandler}>
          <Text style={{ fontSize: 20, textTransform: "uppercase" }}>Run</Text>
        </StyledFuckingButton> :
        <StyledFuckingButton onPress={newGameHandler}>
        <Text style={{ fontSize: 20, textTransform: "uppercase" }}>Jeszcze!</Text>
      </StyledFuckingButton>
      }
    </View>
  );
};

export default GameScreen;

const StyledNumberContainer = styled(View)`
  width: 80%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 20px;
  border-radius: 15px;
`;

const StyledNumber = styled(Text)`
  font-size: 20px;
  color: blue;
`;

const StyledHintHeader = styled(Text)`
  font-size: 25px;
  text-align: center;
  margin-top: 30px;
`;

const StyledFuckingButton = styled(TouchableHighlight)`
  margin-top: 30px;
  width: 150px;
  height: 60px;
  background: red;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
