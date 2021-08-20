import React from 'react'
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { vw, vh, normalize } from '../dimension/dimension'
import CustomTextInput from '../customs/customTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../customs/button'
import { doLogin } from '../action/index'
import { connect } from 'react-redux'
import EyeToggle from '../customs/toggle_eye'
class Password extends React.Component {
    state = {
        disabled: true,
        eye_enable: true
    }
    reviewShcema = yup.object({
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short (8 char min)')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });

    loginUser = (values) => {
        console.log(values);
        let payload = {
            password: values.password
        }
        this.props.doLogin(payload)
        this.props.navigation.navigate('DOB')
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.navbar}>
                    <Text style={styles.loginText}>Create account</Text>
                </SafeAreaView>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                    <Image style={styles.backImage} source={require('../assets/back.png')} />
                </TouchableOpacity>
                <Formik
                    initialValues={{ password: '' }}
                    validationSchema={this.reviewShcema}
                    onSubmit={(values) => this.loginUser(values)}
                >
                    {props => (
                        <View style={styles.subContainer}>
                            <Text style={styles.inputHeader}>Create a password</Text>
                            <CustomTextInput
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                autoFocus={true}
                                maxLength={15}
                                secure={this.state.eye_enable}
                            />
                            <Text style={styles.belowText}>Use at least 8 characters</Text>
                            <View style={styles.buttonContainer}>
                                <Button
                                    height={Platform.OS === "ios" ? 40 : 50}
                                    width={150}
                                    color='black'
                                    buttonText='NEXT'
                                    backgroundColor='white'
                                    disabled={props.values.password != '' && props.errors.password === undefined ? false : true}
                                    onPress={() => props.handleSubmit()}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
                <EyeToggle
                    height={Platform.OS === "ios" ? 147 : 122}
                    right={0}
                    active={(y) => this.setState({ eye_enable: y })}
                />
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    doLogin: data => dispatch(doLogin(data)),
})
export default connect(null,mapDispatchToProps)(Password)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    navbar: {
        alignItems: 'center'
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: Platform.OS === "ios" ? null : vh(16)
    },
    subContainer: {
        marginLeft: vw(15),
        marginRight: vw(15)
    },
    backImage: {
        height: Platform.OS ? vh(20) : vh(25),
        width: Platform.OS ? vh(20) : vh(25)
    },
    inputHeader: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: vh(5),
        marginTop: vh(20)
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
    belowText: {
        fontSize: vh(11),
        color: 'lightgrey'
    }
})