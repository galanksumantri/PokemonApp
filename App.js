import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import codePush from "react-native-code-push";
import Routing from './src/router';
import { navigationRef } from './src/router/RootNavigation';

const CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    title: 'a new update is available!'
  }
}

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routing />
    </NavigationContainer>
  );
}
export default codePush(CodePushOptions)(App);
