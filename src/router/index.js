import React from 'react';
import { View, Text } from 'react-native';
import AppRouter from './App'
import AuthRouter from './Auth'
import { createSwitchNavigator } from 'react-navigation'

const AppWrapper = (props) => (
  <>
    <Text>OK!</Text>
    <AppRouter {...props} />
  </>
)

const Router = createSwitchNavigator({
  Auth: {
    screen: AuthRouter
  },

  App: {
    screen: AppWrapper
  },
}, {
  initialRouteName: 'App'
});

export default Router;
