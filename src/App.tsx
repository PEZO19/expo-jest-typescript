import {Platform, View, Text} from 'react-native';
// import Navigator from './screens/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

// import { createAppContainer } from 'react-navigation';
// import { createBrowserApp } from '@react-navigation/web';

// const Application = Platform.OS === 'web'
//   ? createBrowserApp(Navigator)
//   : createAppContainer(Navigator)
// ;

// const Application = createAppContainer(Navigator)
// export default Application;

export default function App() {
  return (
    <NavigationContainer>
      <Text>
        Working example
      </Text>
    </NavigationContainer>
  );
}