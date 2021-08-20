import React from 'react'
import { Platform } from 'react-native'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import { vw, vh } from '../dimension/dimension'

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
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 40,
        marginBottom:vh(10)
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize:Platform.OS==="ios"?null:vh(17)
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSocial:{
        height:vh(30),
        width:vw(30)
    },
    imageContainer:{
        position:'absolute',
        left:12
    }
})