import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import DiscoverPage from '../../screens/App/Discover';
import SearchPage from '../../screens/App/Search';
import LibraryRouter from './Library';

const AppRouter = createMaterialBottomTabNavigator({
  Discover: { screen: DiscoverPage },
  Search: { screen: SearchPage },
  Library: { screen: LibraryRouter }
}, {
  initialRouteName: 'Discover'
});

export default AppRouter;
