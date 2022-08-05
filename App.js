import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Navigations/Appstack';
import {LogBox} from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs([
  'Warning: Each child in a list should have a unique "key" prop.',
]);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
