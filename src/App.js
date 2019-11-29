import React from 'react';
import { createAppContainer } from 'react-navigation';
import router from './router'

const App = createAppContainer(router);

export default App;
