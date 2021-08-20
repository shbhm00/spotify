import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'
import {vw,vh,normalize} from '../dimension/dimension'
import active_heart from '../assets/heart_Toggle/active_heart.png'
import inactive_heart from '../assets/heart_Toggle/inactive_heart.png'

export default class Eye extends React.Component{
    state={
        image:inactive_heart
    }
    heart_toggle = ()=>{
        if(this.state.image===inactive_heart)
        {
            this.setState({image:active_heart})
        }
        else
        {
            this.setState({image:inactive_heart})
        }
    }
  render(){
    return(
        <View style={[styles.linerColor,{top:vh(this.props.height)},
        {right:vw(this.props.right)}]}>
            <TouchableOpacity onPress={this.heart_toggle}>
            <Image style={styles.eyeImage} source={this.state.image}/>
            </TouchableOpacity>
        </View>
    )
  }
}
const styles=StyleSheet.create({
  linerColor:{
      position:'absolute',
      left:vw(320)
  },
  eyeImage:{
      height:vh(20),
      width:vw(20)
  }
})