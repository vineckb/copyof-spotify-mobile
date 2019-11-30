import React from 'react';
import { View, Text } from 'react-native';
import AppRouter from './App'
import AuthRouter from './Auth'
import { createSwitchNavigator } from 'react-navigation'

const Router = createSwitchNavigator({
  Auth: {
    screen: AuthRouter
  },

  App: {
    screen: AppRouter
  },
}, {
  initialRouteName: 'App'
});

export default Router;
