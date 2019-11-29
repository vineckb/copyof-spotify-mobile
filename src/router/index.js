import React from 'react';
import AppRouter from './App'
import AuthRouter from './Auth'
import { createSwitchNavigator } from 'react-navigation'

const Router = createSwitchNavigator({
  Auth: {
    screen: AuthRouter
  },

  App: {
    screen: AppRouter
  },
}, {
  initialRouteName: 'App'
});


/*

  switch
    auth (stack)
    app (tabs)
      - discover
      - library (tabs)
        - playlists
        - artists
        - albums
        - musics
      - search

      // secondary routes
      - playlist
      - artist
      - album

*/

export default Router;
