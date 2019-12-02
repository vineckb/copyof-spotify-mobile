import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import ListItem from './Item';

class VerticalList extends Component {
  render () {
    const { items } = this.props;

    return (
      <SafeAreaView>
        <FlatList
          data={items}
          renderItem={({item}) => <ListItem {...item} />} />
      </SafeAreaView>
    )
  }
}

export default VerticalList;
