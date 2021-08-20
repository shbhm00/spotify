import React from 'react';
import { Platform } from 'react-native';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import { date } from 'yup';
import Button from '../customs/button'
import { vw, vh } from '../dimension/dimension'

export  default class Gender extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.navbar}>
          <Text style={styles.loginText}>Create account</Text>
        </SafeAreaView>

        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DOB')}>
            <Image style={styles.backImage} source={require('../assets/back.png')} />
          </TouchableOpacity>
          <Text style={styles.inputHeader}>What's your gender?</Text>
          {/* <TouchableOpacity
            style={styles.calenderButton}
            onPress={this.showDateTimePicker}
          >
            <Text style={styles.dateText}>{this.state.selecteddate}</Text>
          </TouchableOpacity> */}
        </View>
        <ModalDropdown
        style={styles.calenderButton}
        disabled={false}
        options={['Male','Female','Non-binary']}
        textStyle={styles.dropDownTextStyle}
        dropdownStyle={styles.dropDownContainer}
        dropdownTextStyle={styles.DownTextStyle}
        />
        <View style={styles.buttonContainer}>
          <Button
            height={Platform.OS==="ios"?40:50}
            width={150}
            color='black'
            buttonText='NEXT'
            backgroundColor='white'
            onPress={()=>this.props.navigation.navigate('Name')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  input: {
    height: vh(45),
    width:Platform.OS==="ios" ?'100%':'97%',
    paddingLeft: vw(10),
    backgroundColor: '#e9eaea',
    paddingTop: vh(5),
    paddingBottom: vh(5),
    borderRadius: (5),
    marginTop: vh(5)
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
  calenderButton: {
      marginLeft:vw(15),
      marginTop:vh(10),
    height: Platform.OS==="ios"?vh(45):vh(60),
    width: '94%',
    backgroundColor: 'grey',
    borderRadius: 5,
    justifyContent:'center'
  },
  buttonContainer: {
    marginTop: vh(35)
},
dateText:{
  fontSize:vh(15),
  color:'white',
  fontWeight:'500'
},
dropDownTextStyle:{
    color:'white',
    fontSize:vh(13),
    fontWeight:'500',
    marginLeft:vw(20)
},
dropDownContainer:{
    backgroundColor:'#333333',
    width:'94%',
    marginTop:vh(10)
},
DownTextStyle:{
    backgroundColor:'#333333',
    color:'white',
    fontSize:vh(14),
    marginLeft:vw(20)
}
});
