import React, {Component} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

class Grid extends Component {
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.items}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <View style={styles.itemView}>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  itemView: {
    alignItems: 'center',
    backgroundColor: '#dcda48',
    flexGrow: 1,
    margin: 4,
    flexBasis: 0,
  },

  item: {
    flexGrow: 1,
  },

  text: {
    color: '#333333',
  },
});

export default Grid;
