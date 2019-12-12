import React, { Component } from 'react';
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
      <Grid items={genres} />
    )
  }
}

export default DiscoverPage;
