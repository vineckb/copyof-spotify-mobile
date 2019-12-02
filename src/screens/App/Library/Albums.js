import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { albums } from '../../../api';
import VerticalList from '../../../components/VerticalList';

class AlbumsPage extends Component {
  render () {
    return (
      <View>
        <Text>Albums</Text>

        <VerticalList items={albums} />
      </View>
    )
  }
}

export default AlbumsPage;
