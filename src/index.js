import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Navigation from './navigation'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
    </>
  );
}