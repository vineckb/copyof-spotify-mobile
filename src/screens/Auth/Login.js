import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class LoginPage extends Component {
  render () {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Login Page</Text>
        <Button title="Enter" onPress={() => navigate('App') } />
      </View>
    )
  }
}

export default LoginPage;
