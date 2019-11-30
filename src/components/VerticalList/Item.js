import React, { Component } from 'react';
import { Avatar, List } from 'react-native-paper';

class VerticalListItem extends Component {
  render () {
    const { cover, name, description } = this.props;

    return (
      <List.Item
        {...this.props}
        left={props =>
          <Avatar.Image
            size={50}
            source={{ uri: cover }}
            />
          }
        />
    )
  }
}

export default VerticalListItem;
