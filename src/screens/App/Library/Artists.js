import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { artists } from '../../../api';
import VerticalList from '../../../components/VerticalList';

class ArtistsPage extends Component {
  render () {
    return (
      <View>
        <Text>Artists</Text>

        <VerticalList items={artists} />
      </View>
    )
  }
}

export default ArtistsPage;
