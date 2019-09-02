import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import styled from "styled-components";
import Colors from "../colors";

const Card = ({ confirmed, setConfirmed, disableStatus, setDisableStatus ,setUserNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [initialNumber, setInitialNumber] = useState();
  

  const changeValueHandler = value => {
    setEnteredValue(value.replace(/[^0-9]/g, ""));
  };

  const resetValueHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber <= 0) {
      Alert.alert("ACHTUNG", "number has to be bigger than 0", [
        { text: "ok", style: "destructive" }
      ]);
      return;
    }
    setConfirmed(true);
    setInitialNumber(chosenNumber);
    setUserNumber(chosenNumber)
    setEnteredValue("");
    setDisableStatus(false);
  };
  let confirmedOutput;
  confirmed
    ? (confirmedOutput = <Text>Choosen number is {initialNumber}</Text>)
    : null;
  let headline;
  !confirmed ? (headline = <StyledText>select a number</StyledText>) : null;

  return (
    <StyledCard
      style={{
        elevation: 9,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 6
      }}
    >
    {headline}
      {disableStatus ? (
        <StyledTextInput
          style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
          onChangeText={changeValueHandler}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredValue}
          editable={disableStatus}
        />
      ) : null}

      {enteredValue.length > 0 ? (
        <StyledFlexWrapper>
          <View style={{ width: 100 }}>
            <Button
              color={Colors.primary}
              title="reset"
              onPress={resetValueHandler}
            />
          </View>
          <View style={{ width: 100 }}>
            <Button
              title="confirm"
              color={Colors.secondary}
              onPress={confirmInputHandler}
            />
          </View>
        </StyledFlexWrapper>
      ) : null}
      {confirmedOutput}
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled(View)`
  width: 300px;
  max-width: 80%;
  align-items: center;
  background: white;
  border-radius: 10px;
  padding: 12px;
`;

const StyledFlexWrapper = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const StyledText = styled(Text)`
  margin-bottom: 30px;
`;

const StyledTextInput = styled(TextInput)`
  width: 60px;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;
