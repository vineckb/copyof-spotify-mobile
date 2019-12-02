import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { playlists } from '../../../api';
import VerticalList from '../../../components/VerticalList';

class PlaylistsPage extends Component {
  render () {
    return (
      <View>
        <Text>Playlists</Text>

        <VerticalList items={playlists} />
      </View>
    )
  }
}

export default PlaylistsPage;
