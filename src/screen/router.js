import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/Homescreen'
import SignIn from '../screen/signin'
import SignUp from '../screen/signup'
import Password from '../screen/createpass'
import DOB from '../screen/DOB'
import Bottom from '../screen/bottomtab'
import Splash from '../screen/splashScreen'
import Gender from '../screen/gender'
import Name from '../screen/signupname'
import Language from '../screen/Language'
import Playlist from '../screen/playlistScreen'
import Profile from '../screen/profile'
import Player from '../screen/player';
import LoginWithoutPassword from '../screen/loginWithoutPass'

const Router = ()=>{
  const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Password" component={Password} />
          <Stack.Screen name="LoginWithoutPassword" component={LoginWithoutPassword} />
          <Stack.Screen name="DOB" component={DOB} />
          <Stack.Screen name="Gender" component={Gender} />
          <Stack.Screen name="Name" component={Name} />
          <Stack.Screen name="Language" component={Language} />
          <Stack.Screen name="Bottom" component={Bottom} />
          <Stack.Screen name="Playlist" component={Playlist} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Player" component={Player} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
export default Router;