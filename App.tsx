// import React from 'react';
// import {LogBox} from 'react-native';
// import Route from './src/navigation';
// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
//   'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead',
// ]);
// LogBox.ignoreAllLogs();

// const App = () => {
//   return <Route />;
// };
// export default App;

import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import Route from './src/navigation';
import {Store} from './src/services/config/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreAllLogs();
let persistor = persistStore(Store);

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
