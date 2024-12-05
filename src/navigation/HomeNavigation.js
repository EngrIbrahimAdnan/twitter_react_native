import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTE from '../index';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Communities from '../screens/Communities';
import Search from '../screens/Search';
import Messages from '../screens/Messages';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTE.HOME.HOME} component={Home} />
      <Stack.Screen name={ROUTE.HOME.NOTIFICATIONS} component={Notifications} />
      <Stack.Screen name={ROUTE.HOME.COMMUNITIES} component={Communities} />
      <Stack.Screen name={ROUTE.HOME.SEARCH} component={Search} />
      <Stack.Screen name={ROUTE.HOME.MESSAGES} component={Messages} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
