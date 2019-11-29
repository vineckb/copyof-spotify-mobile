import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SearchPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" color={tintColor} size={20}/>
    )
  };

  render () {
    return (
      <View>
        <Text>Search</Text>
      </View>
    )
  }
}

export default SearchPage;
