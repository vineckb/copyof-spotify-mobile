import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class LibraryPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="library-music" color={tintColor} size={20}/>
    )
  };

  render () {
    return (
      <View>
        <Text>Lists Test page</Text>

        <VerticalList>
          <>
        </VerticalList>

        <HorizontalList>
          <>
        </HorizontalList>
      </View>
    )
  }
}

export default LibraryPage;
