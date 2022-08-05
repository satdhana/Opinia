import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';
import LogIn from '../Screen/LogIn';
import SignUp from '../Screen/SignUp';
import Home from '../Screen/Home';
import Splash2 from '../Screen/Splash2';
import Follower from '../Screen/Follower';
import Following from '../Screen/Following';
import Detail from '../Screen/Detail';
const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash2" component={Splash2} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Follower" component={Follower} />
      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};
export default AppStack;
