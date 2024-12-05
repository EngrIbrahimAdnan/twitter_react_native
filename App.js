import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ChatScreen from "./ChatScreen";
import DirectMessages from "./DirectMessages";

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ChatScreen />
        {/* <DirectMessages /> */}
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
