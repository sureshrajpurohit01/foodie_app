import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from '../reducers';
import AppWithNavigationState from '../navigatorconfig/navigators';
import { middleware } from '../navigatorconfig/utils/redux';

// Creating store with Reducers and middleware...
const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
