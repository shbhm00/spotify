import React from 'react'
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { vw, vh, normalize } from '../dimension/dimension'
import CustomTextInput from '../customs/customTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../customs/button'
import { doLogin } from '../action/index'
import { connect } from 'react-redux'
import { Platform } from 'react-native';

class SignUp extends React.Component {
    state = {
        disabled: true
    }

    reviewShcema = yup.object({
        email: yup.string().required().email(),
    });

    loginUser = (values) => {
        console.log(values);
        let payload = {
            email: values.email
        }
        this.props.doLogin(payload)
        this.props.navigation.navigate('Password')
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.navbar}>
                    <Text style={styles.loginText}>Create account</Text>
                </SafeAreaView>
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={this.reviewShcema}
                    onSubmit={(values) => this.loginUser(values)}
                >
                    {props => (
                        <View style={styles.subContainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                <Image style={styles.backImage} source={require('../assets/back.png')} />
                            </TouchableOpacity>
                            <Text style={styles.inputHeader}>What's your email?</Text>
                            <CustomTextInput
                                onChangeText={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                autoFocus={true}
                            />
                            <Text style={styles.belowText}>You'll need to confirm this email later</Text>
                            <View style={styles.buttonContainer}>
                                <Button
                                    height={Platform.OS === "ios" ? 40 : 50}
                                    width={150}
                                    color='black'
                                    buttonText='NEXT'
                                    backgroundColor='white'
                                    disabled={props.values.email != '' && props.errors.email === undefined ? false : true}
                                    onPress={() => props.handleSubmit()}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    doLogin: data => dispatch(doLogin(data)),
})
export default connect(null, mapDispatchToProps)(SignUp)
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
        fontSize: 11,
        color: 'lightgrey'
    }
})