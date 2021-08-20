import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {vw, vh} from '../dimension/dimension';
import eye_inactive from '../assets/eyeToggle/inactive_eye.png';
import eye_active from '../assets/eyeToggle/active_eye.png';

export default class Eye extends React.Component {
  state = {
    eye: eye_inactive,
    pass: true,
  };
  active_pass = () => {
    if (this.state.eye === eye_inactive) {
      this.setState({eye: eye_active, pass: false}, () => {
        this.props.active(this.state.pass);
      });
    } else {
      this.setState({eye: eye_inactive, pass: true}, () => {
        this.props.active(this.state.pass);
      });
    }
  };
  render() {
    return (
      <View
        style={[
          styles.linerColor,
          {top: vh(this.props.height)},
          {right: vw(this.props.right)},
        ]}>
        <TouchableOpacity onPress={this.active_pass}>
          <Image style={styles.eyeImage} source={this.state.eye} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  linerColor: {
    position: 'absolute',
    left: vw(310),
  },
  eyeImage: {
    height: vh(25),
    width: vw(25),
  },
});
