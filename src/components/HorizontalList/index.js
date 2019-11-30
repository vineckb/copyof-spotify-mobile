import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ListItem from './Item';

class VerticalList extends Component {
  render () {
    const { items } = this.props;

    return (
      <View>
        <FlatList
          data={items}
          horizontal={true}
          renderItem={({item}) => <ListItem {...item} />} />
      </View>
    )
  }
}

export default VerticalList;
