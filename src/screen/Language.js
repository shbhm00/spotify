import React from 'react'
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { vw, vh, normalize } from '../dimension/dimension'
import CustomTextInput from '../customs/customTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../customs/button'
import HomeScreen from './Homescreen'
import EyeToggle from '../customs/toggle_eye'
import MusicTaste from '../customs/musicTaste'
import LanguageData from '../dummy_data/language'
export  default class Language extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.navbar}>
                </SafeAreaView>
                        <View style={styles.subContainer}>
                            <Text style={styles.inputHeader}>What music do you like?</Text>

                            <MusicTaste
                            Data_item={LanguageData}
                            onPress1={()=>this.props.navigation.navigate('Bottom')}
                            />
                            {/* <View style={styles.buttonContainer}>
                                <Button
                                    height={40}
                                    width={130}
                                    color='black'
                                    buttonText='Next'
                                    backgroundColor="white"
                                />
                            </View> */}
                        </View>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    navbar: {
        alignItems: 'center',
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold'
    },
    subContainer: {
        marginTop:vh(20)
    },
    backImage: {
        height: vh(20),
        width: vw(20)
    },
    inputHeader: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: vh(5),
        marginTop: vh(20),
        marginBottom:vh(30),
        marginLeft:vw(10)
    },
    inputHeader1: {
        marginTop: vh(25),
        color: 'white',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: vh(5)
    },
    buttonContainer: {
        marginTop: vh(40)
    },
    bottomButton: {
        height: vh(25),
        width: '60%',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: normalize(40),
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        marginTop: vh(25),
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: vh(10)
    },
    activityIndicator: {
        position: 'absolute',
        right: vh(20),
        top: vh(193)
    }
})