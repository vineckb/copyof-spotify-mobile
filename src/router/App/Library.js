import React, { Component } from 'react';
import { createMaterialTopTabNavigator  } from 'react-navigation-tabs';
import PlaylistsPage from '../../screens/App/Library/Playlists';
import AlbumsPage from '../../screens/App/Library/Albums';
import ArtistsPage from '../../screens/App/Library/Artists';
import MusicsPage from '../../screens/App/Library/Musics';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LibraryRouter = createMaterialTopTabNavigator ({
  Playlists: { screen: PlaylistsPage },
  Albums: { screen: AlbumsPage },
  Artists: { screen: ArtistsPage },
  Musics: { screen: MusicsPage }
}, );

class LibraryPage extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="library-music" color={tintColor} size={20}/>
    )
  };

  render () {
    return (
      <LibraryRouter {...this.props} />
    )
  }
}


export default LibraryPage;
