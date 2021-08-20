import React from 'react'
import { Platform } from 'react-native'
import {View,Text,StyleSheet,Image,TextInput} from 'react-native'
import {vw,vh} from '../dimension/dimension'
import EyeToggle from '../customs/toggle_eye'
export default class Custom extends React.Component{
    state= {
        isFocused: false
    }
     handleFocus = () => {this.setState({isFocused: true});this.props.focus}
    
     handleBlur = () => {this.setState({isFocused: false});this.props.onBlur}
  render(){
    return(
      <View style={styles.container}>
          <TextInput
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          autoFocus={this.props.autoFocus}
          style={[styles.input,{
            backgroundColor: this.state.isFocused
                ? '#969696'
                : '#525252',
            borderWidth: 1},{fontWeight:this.props.fontWeight}]}
          placeholder={this.props.Name}
          secureTextEntry={this.props.secure}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholderTextColor='black'
          keyboardType={this.props.keyboardType}
          selectionColor='green'
          maxLength={this.props.maxLength}
          />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  input:{
      height:Platform.OS==="ios"?vh(45):vh(60),
      width:'100%',
      paddingLeft:vw(10),
      backgroundColor:'#e9eaea',
      paddingTop:vh(5),
      paddingBottom:vh(5),
      borderRadius:(5),
      marginTop:vh(5),
      color:'white'
  },
  container:{
    flexDirection:'row',
  }
})