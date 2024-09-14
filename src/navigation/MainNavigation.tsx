import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { isReadyRef, navigationRef } from "react-navigation-helpers";
import Splash from '../screen/splashScreen/Splash';
import AuthNavigation from './AuthNavigation';
// import HomeNavigation from './HomeNavigation';
const stack = createStackNavigator();


const MainNavigation = () => {
  useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}
    onReady={() => {
      isReadyRef.current = true;
    }}>
      <stack.Navigator
      screenOptions={{
        headerShown: false
      }}
        >
        <stack.Screen name="Splash"  component={Splash}/>
        <stack.Screen name="AuthNavigation"  component={AuthNavigation}/>
       {/* <stack.Screen name="HomeNavigation" component={HomeNavigation}/> */}
        
      </stack.Navigator>
      
      </NavigationContainer>

    
  
  )
}

export default MainNavigation;

const styles = StyleSheet.create({})