import React, { Component } from 'react';
import { Card, Avatar, IconButton } from 'react-native-paper';

class GridItem extends Component {
  render () {
    const { cover, name, description } = this.props;

    return (
      <Card>
        <Card.Cover source={{ uri: cover }} />
        <Card.Title
          title={name}
        />
      </Card>
    )
  }
}

export default GridItem;
