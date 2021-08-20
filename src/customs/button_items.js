import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import { vw, vh, normalize } from '../dimension/dimension'

export default class Button extends React.Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, {
                    backgroundColor: this.props.backgroundColor,
                    opacity: this.props.disabled ? 0.4 : 1,
                    height: vh(this.props.height),
                    width: vw(this.props.width),
                    borderColor: this.props.borderColor
                }]}
                    disabled={this.props.disabled}
                    onPress={this.props.onPress}
                >
                    <View>
                    <Text style={[styles.buttonText,{color:this.props.color}]}>{this.props.buttonText}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageSocial} source={this.props.imageSource}/>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'flex-start',
        alignItems:'center',
        flexDirection:'row',
        borderWidth: 0.5,
        marginBottom:vh(5),
        borderRadius:normalize(5),
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,  
    elevation: 5
    },
    buttonText: {
        fontWeight: '500',
        marginLeft:vw(50),
        fontSize:vh(11)
    },
    buttonContainer: {
    },
    imageSocial:{
        height:vh(43),
        width:vw(42)
    },
    imageContainer:{
        position:'absolute',
        left:0
    }
})