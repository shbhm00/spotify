import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { date } from 'yup';
import Button from '../customs/button'
import { vw, vh } from '../dimension/dimension'
export default class DOB extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isDateTimePickerVisible: false,
      selecteddate: ''
    }
  }
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleConfirm = (date) => {
    console.log(date)
    var event = new Date(date);

    let date1 = JSON.stringify(event)
    date1 = date1.slice(1, 11)
    console.log(date1, "date1")
    this.setState({ selecteddate: date1 })
    this.hideDateTimePicker()
  }


  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.navbar}>
          <Text style={styles.loginText}>Create account</Text>
        </SafeAreaView>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.backImage} source={require('../assets/back.png')} />
          </TouchableOpacity>

        <View style={styles.subContainer}>
          <Text style={styles.inputHeader}>What's your Date of birth?</Text>
          <TouchableOpacity
            style={styles.calenderButton}
            onPress={this.showDateTimePicker}
          >
            <Text style={styles.dateText}>{this.state.selecteddate}</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleConfirm}
          onCancel={this.hideDateTimePicker}
          mode="date"
          datePickerModeAndroid={'spinner'}
          isDarkModeEnabled={true}
          textColor="white"

        />
        <View style={styles.buttonContainer}>
          <Button
            height={Platform.OS==="ios"?40:50}
            width={150}
            color='black'
            buttonText='NEXT'
            backgroundColor='white'
            disabled={this.state.selecteddate!==''?false:true}
            onPress={() => this.props.navigation.navigate('Gender')}
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
    width: '100%',
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
    height:Platform.OS==="ios"?vh(45):vh(60),
    width: '100%',
    paddingLeft:vw(20),
    backgroundColor: 'grey',
    borderRadius: 5,
    justifyContent:'center'
  },
  buttonContainer: {
    marginTop: vh(40)
},
dateText:{
  fontSize:vh(15),
  color:'white',
  fontWeight:'500'
}
});
