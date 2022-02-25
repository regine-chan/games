import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsView from "./src/views/SettingsView";
import MenuView from "./src/views/MenuView";
import GameView from "./src/views/GameView";

export type RootStackParamList = {
  Menu: undefined;
  Game: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuView} />
        <Stack.Screen name="Game" component={GameView} />
        <Stack.Screen name="Settings" component={SettingsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
