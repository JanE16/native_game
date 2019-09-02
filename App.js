import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [started, setStarted] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Header title="some shit" />
      {!started ? (
        <StartGameScreen
          started={started}
          setStarted={setStarted}
          setUserNumber={setUserNumber}
        />
      ) : (
        <GameScreen userNumber={userNumber} setStarted={setStarted} />
      )}
    </View>
  );
}
