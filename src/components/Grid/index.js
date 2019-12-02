import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import GridItem from './Item';

class Grid extends Component {
  render () {
    const { items } = this.props;

    return (
      <SafeAreaView>
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <GridItem {...item} />
            )
          }}
        />
      </SafeAreaView>
    )
  }
}

export default Grid;
