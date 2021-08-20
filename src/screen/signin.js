import React from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {vw, vh, normalize} from '../dimension/dimension';
import CustomTextInput from '../customs/customTextInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import Button from '../customs/button';
import EyeToggle from '../customs/toggle_eye';
import {doLogin, action} from '../action/index';
import {connect} from 'react-redux';

class Signin extends React.Component {
  state = {
    disabled: true,
    animate: true,
    eye_enable: true,
  };

  reviewShcema = yup.object({
    email: yup.string().required().email(),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short (8 char min)')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });
  verification_handler = values => {
    if (
      this.props.email === values.email &&
      this.props.password === values.password
    ) {
      this.props.action();
      this.props.navigation.navigate('Bottom');
    } else {
      alert('Please enter a valid cred.');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.navbar}>
          <Text style={styles.loginText}>Log in</Text>
        </SafeAreaView>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={this.reviewShcema}
          onSubmit={values => {
            this.verification_handler(values);
          }}>
          {props => (
            <View style={styles.subContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                <Image
                  style={styles.backImage}
                  source={require('../assets/back.png')}
                />
              </TouchableOpacity>
              <Text style={styles.inputHeader}>Email or username</Text>
              <CustomTextInput
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
              />
              <Text style={styles.inputHeader1}>Password</Text>
              <View>
                <CustomTextInput
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  secure={this.state.eye_enable}
                  fontWeight="700"
                />
                <EyeToggle
                  height={Platform.OS === 'ios' ? 20 : 20}
                  right={20}
                  active={y => this.setState({eye_enable: y})}
                />
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  height={Platform.OS === 'ios' ? 40 : 50}
                  width={150}
                  color="black"
                  buttonText="LOG IN"
                  backgroundColor="white"
                  onPress={() => props.handleSubmit()}
                  disabled={
                    props.values.email != '' &&
                    props.values.password != '' &&
                    props.errors.email === undefined &&
                    props.errors.password === undefined
                      ? false
                      : true
                  }
                />
              </View>
            </View>
          )}
        </Formik>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() =>
              this.props.navigation.navigate('LoginWithoutPassword')
            }>
            <Text style={styles.bottomText}>LOG IN WITHOUT PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const {email, password} = state.authReducer;
  return {
    email,
    password,
  };
};
const mapDispatchToProps = dispatch => ({
  action: () => dispatch(action()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signin);

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
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? null : vh(16),
  },
  subContainer: {
    marginLeft: vw(15),
    marginRight: vw(15),
  },
  backImage: {
    height: Platform.OS ? vh(20) : vh(25),
    width: Platform.OS ? vh(20) : vh(25),
  },
  inputHeader: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: vh(5),
    marginTop: vh(20),
  },
  inputHeader1: {
    marginTop: vh(25),
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: vh(5),
  },
  buttonContainer: {
    marginTop: vh(40),
  },
  bottomButton: {
    height: vh(25),
    width: '60%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: normalize(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    marginTop: vh(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: vh(10),
  },
  activityIndicator: {
    position: 'absolute',
    right: vh(20),
    top: vh(193),
  },
});
