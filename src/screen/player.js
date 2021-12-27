import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Playlist from '../dummy_data/playlisdata';
import {vh, vw, normalize} from '../dimension/dimension';
import Slider from '@react-native-community/slider';
export default class Player extends React.Component {
  state = {
    sound: false,
  };
  play = () => {
    try {
      // or play from url
      SoundPlayer.playUrl(Playlist[0].url);
      this.setState({sound: !this.state.sound});
      // this.getInfo();
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };
  pause = () => {
    SoundPlayer.pause();
    this.setState({sound: !this.state.sound});
  };
  async getInfo() {
    // You need the keyword `async`
    try {
      const info = await SoundPlayer.getInfo(); // Also, you need to await this because it is async
      console.log('getInfo', info); // {duration: 12.416, currentTime: 7.691}
    } catch (e) {
      console.log('There is no song playing', e);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView></SafeAreaView>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.backImage}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Player</Text>
        </View>
        <View style={styles.subContainer}>
          <Image style={styles.songImage} source={{uri: Playlist[0].artwork}} />
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={Playlist[0].duration}
            minimumTrackTintColor="red"
            maximumTrackTintColor="green"
            // value={SoundPlayer.getInfo._W.currentTime}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => alert('Coming Soon')}>
              <Image
                style={styles.nextPrevios}
                source={require('../assets/player_button/previos.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (this.state.sound ? this.pause() : this.play())}>
              <Image
                style={styles.playPause}
                source={
                  this.state.sound
                    ? require('../assets/player_button/pause.png')
                    : require('../assets/player_button/play.png')
                }
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Coming Soon')}>
              <Image
                style={styles.nextPrevios}
                source={require('../assets/player_button/next.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',
  },
  subContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginTop: vh(25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextPrevios: {
    height: normalize(50),
    width: normalize(50),
    marginRight: vw(20),
    marginLeft: vw(20),
  },
  playPause: {
    height: normalize(70),
    width: normalize(70),
  },
  headerText: {
    color: 'white',
    fontSize: vh(17),
    fontWeight: 'bold',
    marginLeft: vw(140),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(10),
  },
  backImage: {
    height: normalize(17),
    width: normalize(17),
  },
  songImage: {
    height: normalize(300),
    width: normalize(300),
  },
});
