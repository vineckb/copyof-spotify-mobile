import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { playlists } from '../../../api';
import VerticalList from '../../../components/VerticalList';
import Filters from '../../../components/Filters';

class PlaylistsPage extends Component {
  render () {
    return (
      <View>
        <Text>Playlists</Text>

        <Filters />

        <VerticalList items={playlists} />
      </View>
    )
  }
}

export default PlaylistsPage;
