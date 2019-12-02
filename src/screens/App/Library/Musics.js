import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { musics } from '../../../api';
import VerticalList from '../../../components/VerticalList';

class MusicsPage extends Component {
  render () {
    return (
      <View>
        <Text>Musics</Text>

        <VerticalList items={musics} />
      </View>
    )
  }
}

export default MusicsPage;
