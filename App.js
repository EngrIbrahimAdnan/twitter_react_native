import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChatScreen from './ChatScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './src/navigation/HomeNavigation';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        {/* <ChatScreen /> */}
        <MainNavigation />
        {/* <HomeNavigation /> */}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
