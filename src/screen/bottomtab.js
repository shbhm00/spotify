import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
const Tab = createBottomTabNavigator();
const Stack1 = createStackNavigator()
const Stack2 = createStackNavigator()
import Home from '../screen/home_screen'
import Search from '../screen/search'
import Library from '../screen/music_library'
import Premium from '../screen/premium'
import { vh, vw, normalize } from '../dimension/dimension'
import Playlist from '../screen/playlistScreen'
import Drawer from '../screen/menuDrawer'
import SignIn from '../screen/signin'
import Player from '../screen/player';
export default class Bottom extends React.Component {

  Home1() {
    return (
      <Stack1.Navigator headerMode={'none'} initialRouteName="Home">
        <Stack1.Screen name="Home" component={Home} />
        <Stack1.Screen name="Playlist" component={Playlist} />
        <Stack1.Screen name="Drawer" component={Drawer} />
      </Stack1.Navigator>

    )
  }
  search() {
    return (
      <Stack2.Navigator headerMode={'none'} initialRouteName="Search">
        <Stack2.Screen name="Search" component={Search} />
        <Stack2.Screen name="Playlist" component={Playlist} />
      </Stack2.Navigator>
    )
  }
  render() {
    return (
      <Tab.Navigator tabBarOptions={{
        showLabel: true, activeTintColor: 'white', inactiveTintColor: '#d9d9d9',labelPosition:'below-icon',labelStyle:{marginBottom:Platform.OS==="ios"?null:vh(5)}, style: {
          backgroundColor: '#333333',height:Platform.OS==="ios"?vh(80):vh(65)
        }
      }}>
        <Tab.Screen name="Home" component={this.Home1}
          options={{
            tabBarIcon: ({ focused }) => focused ? (
              <Image style={styles.tabIcon} source={require('../assets/home_active.png')} />) :
              (<Image style={styles.tabIcon} source={require('../assets/home_inactive.png')} />)

          }}
        />
        <Tab.Screen name="Search" component={this.search}
          options={{
            tabBarIcon: ({ focused }) => focused ? (
              <Image style={styles.tabIcon} source={require('../assets/search_active.png')} />) :
              (<Image style={styles.tabIcon} source={require('../assets/search_inactive.png')} />)

          }}
        />
        <Tab.Screen name="Your Library" component={Library}
          options={{
            tabBarIcon: ({ focused }) => focused ? (
              <Image style={styles.tabIcon} source={require('../assets/music_active.png')} />) :
              (<Image style={styles.tabIcon} source={require('../assets/music_inactive.png')} />)

          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  tabIcon: {
    height: normalize(22),
    width: normalize(22)
  }
})