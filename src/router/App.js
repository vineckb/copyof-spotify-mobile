import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DiscoverPage from '../pages/Discover';
import SearchPage from '../pages/Search';
import LibraryPage from '../pages/Library';

const AppRouter = createMaterialBottomTabNavigator({
  Discover: { screen: DiscoverPage },
  Search: { screen: SearchPage },
  Library: { screen: LibraryPage }
}, {
  initialRouteName: 'Discover'
});

export default AppRouter;
