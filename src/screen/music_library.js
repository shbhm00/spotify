import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {vh, vw, normalize} from '../dimension/dimension';
import {connect} from 'react-redux';
import HeartToggle from '../customs/heart_toggle';
import {Wishlist, Rem_Wishlist} from '../action/index';
class Music extends React.Component {
  scrollContent = ({item}) => {
    console.log(item, 'item.id', this.props.wishlist, 'wishlist');
    return this.props.wishlist.includes(item.id) ? (
      <View style={styles.subContainer1}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Player')}>
          <View style={styles.imageTextContainer}>
            <Image style={styles.image} source={{uri: item.imageUri}} />
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.artistText}>{item.artist}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <HeartToggle
          height={10}
          right={10}
          isLiked={this.props.wishlist.indexOf(item.id) !== -1}
          onPress={() => {
            if (this.props.wishlist.indexOf(item.id) === -1)
              this.props.Wishlist(item.id);
            else this.props.Rem_Wishlist(item.id);
          }}
        />
      </View>
    ) : (
      <View></View>
    );
  };
  headerComponent = () => {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.firstLetter}
            onPress={() => this.props.navigation.navigate('Drawer')}>
            <Text style={styles.singleText}>{this.props.name.charAt(0)}</Text>
          </TouchableOpacity>
          <Text style={styles.libraryText}>Your Library</Text>
        </SafeAreaView>
        <View style={styles.subContainer}>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.playlist}>
              <Text style={styles.playlistText}>Playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playlist}>
              <Text style={styles.playlistText}>Artists</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playlist}>
              <Text style={styles.playlistText}>Albums</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.favourite}>Your Favourite List</Text>
        </View>
      </View>
    );
  };
  render() {
    console.log('WishList', this.props.wishlist);
    return (
      <View style={{backgroundColor: 'black', flex: 1}}>
        <FlatList
          ListHeaderComponent={this.headerComponent}
          data={this.props.albumDetails.songs}
          key={this.props.wishlist}
          renderItem={this.scrollContent}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    name: state.authReducer.name,
    albumDetails: state.dataFetcher.albumDetails.default,
    wishlist: state.ADD_WISHLIST.wishlist,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Rem_Wishlist: id => dispatch(Rem_Wishlist(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Music);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    marginTop: Platform.OS === 'ios' ? null : vh(20),
    marginLeft: vw(),
    marginRight: vw(15),
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  firstLetter: {
    height: normalize(40),
    width: normalize(40),
    backgroundColor: '#1976d2',
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleText: {
    fontSize: vh(20),
    fontWeight: '700',
  },
  libraryText: {
    fontSize: vh(22),
    color: 'white',
    fontWeight: 'bold',
    marginLeft: vw(20),
  },
  subContainer: {
    marginLeft: vw(15),
    marginRight: vw(15),
    marginTop: vh(25),
  },
  playlist: {
    height: vh(25),
    width: vw(80),
    borderWidth: 0.3,
    borderColor: 'lightgrey',
    borderRadius: normalize(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: vw(10),
  },
  playlistText: {
    color: 'white',
    fontSize: vh(12),
  },
  headerButtons: {
    flexDirection: 'row',
  },
  favourite: {
    color: 'white',
    fontSize: vh(22),
    marginTop: vh(25),
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  backImage: {
    height: vh(20),
    width: vw(20),
    tintColor: 'white',
  },
  topMargin: {
    marginTop: vh(15),
  },
  albumImage: {
    height: normalize(270),
    width: normalize(270),
    marginLeft: vw(20),
  },
  imageContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  artistName: {
    color: 'lightgrey',
    fontSize: vh(10),
    marginTop: vh(10),
  },
  spotify: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh(10),
  },
  spotifyImage: {
    height: normalize(25),
    width: normalize(25),
  },
  spotifyText: {
    color: '#ffffff',
    fontWeight: '500',
    marginLeft: vw(10),
  },
  likes: {
    color: '#808080',
    marginTop: vh(10),
    fontSize: vh(12),
  },
  multipleIcons: {
    flexDirection: 'row',
    marginTop: vh(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconImage: {
    marginRight: vw(20),
    height: normalize(30),
    width: normalize(30),
    tintColor: 'lightgrey',
  },
  playButton: {
    height: normalize(60),
    width: normalize(60),
  },
  miniIcons: {
    flexDirection: 'row',
  },
  image: {
    height: normalize(55),
    width: normalize(55),
  },
  titleText: {
    color: 'white',
    fontSize: vh(14),
    fontWeight: '500',
  },
  artistText: {
    color: 'grey',
    marginTop: vh(5),
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vh(10),
  },
  textContainer: {
    marginLeft: vw(15),
  },
  subContainer1: {
    marginLeft: vw(15),
    marginRight: vw(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  more: {
    height: vh(20),
    width: vw(20),
  },
});
