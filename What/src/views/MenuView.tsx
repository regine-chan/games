import React from "react";
import Button from "../components/Button";
import { View } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">;

const MenuView = ({ navigation }: Props) => {
  const handleStartClick = () => {
    navigation.push("Game");
  };

  const handleSettingsClick = () => {
    navigation.push("Settings");
  };

  return (
    <View>
      <Button text={"Start"} onClick={handleStartClick} />
      <Button text={"Settings"} onClick={handleSettingsClick} />
    </View>
  );
};

export default MenuView;
