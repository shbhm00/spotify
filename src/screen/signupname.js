import React from 'react'
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { vw, vh, normalize } from '../dimension/dimension'
import CustomTextInput from '../customs/customTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../customs/button'
import { doLogin } from '../action/index'
import { connect } from 'react-redux'
 class name extends React.Component {
    state = {
        disabled: true
    }
    reviewShcema = yup.object({
        name: yup
            .string()
            .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
            .max(40)
            .required(),
    });
    loginUser = (values) => {
        console.log(values);
        let payload = {
            name: values.name
        }
        this.props.doLogin(payload)
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.navbar}>
                    <Text style={styles.loginText}>Create account</Text>
                </SafeAreaView>
                <Formik
                    initialValues={{ name: '' }}
                    validationSchema={this.reviewShcema}
                    onSubmit={(values) => this.loginUser(values)}
                >
                    {props => (
                        <View style={styles.subContainer}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Gender')}>
                                <Image style={styles.backImage} source={require('../assets/back.png')} />
                            </TouchableOpacity>
                            <Text style={styles.inputHeader}>What's your name?</Text>
                            <CustomTextInput
                                onChangeText={props.handleChange('name')}
                                onBlur={props.handleBlur('name')}
                                autoFocus={true}
                            />
                            <Text style={styles.belowText}>This appears on Spotify profile.</Text>
                            <View style={styles.buttonContainer}>
                                <Button
                                    height={40}
                                    width={150}
                                    color='black'
                                    buttonText='Create'
                                    backgroundColor='white'
                                    onPress={() => props.handleSubmit(this.props.navigation.navigate('Language'))}
                                    disabled={props.values.name != '' && props.errors.name === undefined ? false : true}
                                // onPress={()=>this.props.navigation.navigate('DOB')}
                                />
                            </View>
                            <View style={styles.termAndCondition}>
                                <Text style={styles.termAndConditionText}>By creating an account, you agree to Spotify's <Text style={styles.tAndC}> Terms and Conditions of Use.</Text></Text>
                                <Text style={styles.termAndConditionText}>To learn more about how Spotify collects, uses,shares and protects your personal data, please read Spotify's<Text style={styles.tAndC}>Privacy Policy.</Text></Text>
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
export default connect(null, mapDispatchToProps)(name)
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
        fontSize:Platform.OS==="ios"?null:vh(16)
    },
    subContainer: {
        marginLeft: vw(15),
        marginRight: vw(15)
    },
    backImage: {
        height:Platform.OS? vh(20):vh(25),
        width: Platform.OS? vh(20):vh(25)
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
    },
    termAndCondition:{
        marginTop:vh(20),
        
    },
    termAndConditionText:{
        color:'white',
        textAlign:'center',
        fontSize:vh(12),
        marginBottom:vh(15)
    },
    tAndC:{
        fontWeight:'500',
        textDecorationLine:'underline',
        
    }
})