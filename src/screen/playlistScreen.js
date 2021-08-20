import React from 'react'
import { Platform } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image ,FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { vw, vh, normalize } from '../dimension/dimension'
import AlbumDetails from '../dummy_data/albumDetails'
import Home from '../screen/home_screen'
import HeartToggle from '../customs/heart_toggle'


export default class Playlist extends React.Component {
    state={
        list:[]
    }
    scrollContent=({item})=>{
        return(
            <View style={styles.subContainer1}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Player')}>
                <View style={styles.imageTextContainer}>
                    
                <Image style={styles.image} source={{uri:item.imageUri}}/>
                <View style={styles.textContainer}>
                <Text style={styles.titleText} >{item.title}</Text>
                <Text style={styles.artistText} >{item.artist}</Text>
                </View>
                </View>
                <HeartToggle
                height={10}
                right={10}
                />
                </TouchableOpacity> 
            </View>
        )
    }
    headerComponent=()=>{
        return(
            <View style={styles.subContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Image style={styles.backImage} source={require('../assets/back.png')} />
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image style={styles.albumImage} source={{ uri: AlbumDetails.imageUri }} />
                </View>
            </View>
            <Text style={styles.artistName}>{AlbumDetails.artistsHeadline}</Text>
            <View style={styles.spotify}>
                <Image style={styles.spotifyImage} source={require('../assets/spotify_green.png')} />
                <Text style={styles.spotifyText}>Spotify</Text>
            </View>
            <Text style={styles.likes}>{AlbumDetails.numberOfLikes}</Text>
            <View style={styles.multipleIcons}>
                {/* <View style={styles.miniIcons}>
                    <TouchableOpacity>
                        <Image style={styles.iconImage} source={require('../assets/heart_download/heart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconImage} source={require('../assets/heart_download/download.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.iconImage} source={require('../assets/heart_download/more.png')} />
                    </TouchableOpacity>
                </View> */}
                {/* <View style={styles.playImage}>
                    <TouchableOpacity>
                        <Image style={styles.playButton} source={require('../assets/heart_download/play.png')} />
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    style={styles.linear}
                    colors={['black', 'black', 'black', '#ff5722', '#ff5722']}
                    useAngle={true}
                    angle={0}
                >

                    <SafeAreaView>

                    </SafeAreaView>
                    {Platform.OS==="android"?<View style={styles.topMargin}>

                    </View>:null}
                    <FlatList
                    ListHeaderComponent={this.headerComponent}
                    data={AlbumDetails.songs}
                    renderItem={this.scrollContent}
                    />
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linear: {
        flex: 1
    },
    backImage: {
        height: vh(20),
        width: vw(20),
        tintColor: 'white'
    },
    subContainer: {
        marginLeft: vw(15),
        marginRight: vw(15)
    },
    topMargin:{
        marginTop:vh(15)
    },
    headerContainer: {
        flexDirection: 'row'
    },
    albumImage: {
        height: normalize(270),
        width: normalize(270),
        marginLeft: vw(20),

    },
    imageContainer: {
        shadowColor: "black",
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
        marginTop: vh(10)
    },
    spotify: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: vh(10)
    },
    spotifyImage: {
        height: normalize(25),
        width: normalize(25)
    },
    spotifyText: {
        color: '#ffffff',
        fontWeight: '500',
        marginLeft: vw(10)
    },
    likes: {
        color: '#808080',
        marginTop: vh(10),
        fontSize: vh(12)
    },
    multipleIcons: {
        flexDirection: 'row',
        marginTop: vh(10),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconImage: {
        marginRight: vw(20),
        height: normalize(30),
        width: normalize(30),
        tintColor: 'lightgrey'
    },
    playButton: {
        height: normalize(60),
        width: normalize(60),
    },
    miniIcons: {
        flexDirection: 'row'
    },
    image:{
        height:normalize(55),
        width:normalize(55)
    },
    titleText:{
        color:'white',
        fontSize:vh(14),
        fontWeight:'500'
    },
    artistText:{
        color:'grey',
        marginTop:vh(5)
    },
    imageTextContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:vh(10)
    },
    textContainer:{
        marginLeft:vw(15)
    },
    subContainer1:{
        marginLeft:vw(15),
        marginRight:vw(15),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    more:{
        height:vh(20),
        width:vw(20)
    }
})