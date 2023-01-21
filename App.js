/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Image,  Dimensions,
  useWindowDimensions,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import GetStartedScreen from './app/screens/getStarted';
import HowHourGlassWorksScreen from './app/screens/howHourglassWorks';
import MealsScreen from './app/screens/meals';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomNavigations} from './app/routes/CustomNavigations';
import { ProfileNavigation } from './app/routes/Profile';

import GeneralScreen from './app/screens/generalScreen';
const App: () => Node = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
        <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
        }}
        tabBarOptions={{
          labelStyle: {fontSize: 12},
          activeTintColor: 'orange',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen
          name="Home"
          component={CustomNavigations}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://t3.ftcdn.net/jpg/02/97/98/40/360_F_297984037_iuijYMhcLkt2nNW8niNbkvvUeOwtU8b3.jpg',
                }}
                style={{color: 'red', height: 20, width: 30}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png',
                }}
                style={{color: 'red', height: 20, width: 30}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Discover',
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png',
                }}
                style={{color: 'red', height: 20, width: 30}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigation}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
                }}
                style={{color: 'red', height: 20, width: 30}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </>

  );
};

export default App;
