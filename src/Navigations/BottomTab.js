import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Screen/Home';
import Looking from '../Screen/Search';
import Group from '../Screen/Community';
import Chat from '../Screen/Chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Splash from '../Screen/Splash';
const Tab = createBottomTabNavigator();
const Bottomtab = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => {
      setLoad(false);
    };
  }, []);

  if (load) {
    return <Splash />;
  }
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarInactiveTintColor: '#60605A',
        tabBarActiveTintColor: '#41AEA9',
        tabBarInactiveBackgroundColor: '#FFFFFF',
        tabBarActiveBackgroundColor: '#ECEEEF',
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginBottom: 5,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name == 'Home') {
            iconName = 'home';
            size = focused ? 30 : 25;
          } else if (route.name == 'Search') {
            iconName = 'search';
            size = focused ? 30 : 25;
          } else if (route.name == 'Community') {
            iconName = 'users';
            size = focused ? 30 : 25;
          } else if (route.name == 'Chat') {
            iconName = 'chatbubbles';
            size = focused ? 30 : 25;
          }
          return route.name == 'Home' ? (
            <Entypo name={iconName} size={size} color={color} />
          ) : route.name == 'Community' ? (
            <FontAwesome5 name={iconName} size={size} color={color} />
          ) : (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Search" component={Looking} />
      <Tab.Screen name="Community" component={Group} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};
export default Bottomtab;
