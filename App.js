import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatScreen from './ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './src/navigation/HomeNavigation';
import MainNavigation from './src/navigation/MainNavigation';
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatScreen from "./ChatScreen";
import DirectMessages from "./DirectMessages";

import MessagesNav from "./navigation/messages/MessagesNav.js";

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
  //      <MessagesNav />

        {/* <ChatScreen /> */}
//         <MainNavigation />
        {/* <HomeNavigation /> */}
//         <ChatScreen />
        {/* <DirectMessages /> */}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
