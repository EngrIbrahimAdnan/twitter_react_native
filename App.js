import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatScreen from "./ChatScreen";
import DirectMessages from "./DirectMessages";

import MessagesNav from "./navigation/messages/MessagesNav.js";

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    // <SafeAreaProvider>
    //   <PaperProvider>
    //     <ChatScreen />
    //     {/* <DirectMessages /> */}
    //   </PaperProvider>
    // </SafeAreaProvider>

    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <MessagesNav />
      {/* <OrderSummary /> */}
    </NavigationContainer>
  );
};

export default App;
