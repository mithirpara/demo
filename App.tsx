/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import Color from './src/utils/theme/Color';
; 



function App(): React.JSX.Element {

  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1, backgroundColor:Color.colorWhite}}>
       <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle={"dark-content"}
       
      />
       <MainNavigation/>
    </SafeAreaView>
    </Provider>
  );
}

export default App;
