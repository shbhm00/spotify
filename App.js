import React from 'react'
import {View,Text,StyleSheet, Platform} from 'react-native'
import Router from './src/screen/router'
import {persistor,store} from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router/>
          </PersistGate> 
      </Provider>
    )
  }
}
const styles=StyleSheet.create({
  conatainer:{
    flex:1
  }
})