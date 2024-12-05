import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DirectMessages from "../../DirectMessages";
import ChatScreen from "../../ChatScreen";
import ROUTES from "../../constants/routes.js";

const Stack = createNativeStackNavigator();

const MessagesNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.MESSAGES.CHATSCREEN}
        component={DirectMessages}
      />
      <Stack.Screen
        name={ROUTES.MESSAGES.DIRECTMESSAGES}
        component={ChatScreen}
        options={{ headerShown: false }} // Hide header for this screen
      />
    </Stack.Navigator>
  );
};

export default MessagesNav;
