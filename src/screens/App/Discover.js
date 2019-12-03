import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Grid from '../../components/Grid';

import { genres } from '../../api';

class DiscoverPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-compass" color={tintColor} size={20}/>
    )
  };

  render () {
    return (
      <View>
        <Grid items={genres} />
      </View>
    )
  }
}

export default DiscoverPage;
