import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { albums } from '../../../api';
import VerticalList from '../../../components/VerticalList';
import Filters from '../../../components/Filters';

class AlbumsPage extends Component {
  render () {
    return (
      <View>
        <Text>Albums</Text>

        <Filters />

        <VerticalList items={albums} />
      </View>
    )
  }
}

export default AlbumsPage;
