import React from 'react'
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { vh, vw } from '../dimension/dimension'
import Button from '../customs/button_items'
import Album from '../customs/album'
import Album_Data from '../dummy_data/albumCategories'
import {connect} from 'react-redux'
class Home extends React.Component {
    render() {
        return (
                <ScrollView style={styles.scroll}>
                    <LinearGradient
                        useAngle={true}
                        angle={-45}
                        angleCenter={{ x: -5, y: 0.1 }}
                        // start={{x:0,y:0}} end={{x:1,y:0}} 
                        colors={['black', '#5800ff', 'white']}
                        style={styles.linearGradient}>
                        <View style={styles.subcontainer}>
                            <View style={styles.headerContainer}>
                                <View style={styles.headerBar}>
                                    <Text style={styles.greetText}>Good morning</Text>
                                    <View style={styles.leftcornerButtons}>
                                        <TouchableOpacity style={styles.buttonPlayed}>
                                            <Image source={require('../assets/recently_played.png')} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.buttonSetting} onPress={()=>this.props.navigation.navigate('Drawer')}>
                                            <Image source={require('../assets/setting.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.recentlyPlayedAlbum}>
                                    <View>
                                        <Button
                                            height={45}
                                            width={175}
                                            color='white'
                                            buttonText='Liked songs'
                                            backgroundColor='#333333'
                                            imageSource={require('../assets/liked_songs.png')}
                                            onPress={()=>this.props.navigation.navigate('Playlist')}
                                        />
                                        <Button
                                            height={45}
                                            width={175}
                                            color='white'
                                            buttonText='Indie India'
                                            backgroundColor='#333333'
                                            imageSource={require('../assets/indie.jpeg')}
                                            onPress={()=>this.props.navigation.navigate('Playlist')}
                                        />
                                        <Button
                                            height={45}
                                            width={175}
                                            color='white'
                                            buttonText='Indie Shower Tunes'
                                            backgroundColor='#333333'
                                            imageSource={require('../assets/indie.jpeg')}
                                            onPress={()=>this.props.navigation.navigate('Playlist')}
                                        />
                                    </View>
                                    <View style={styles.albumBoxes}>
                                        <Button
                                            height={45}
                                            width={175}
                                            color='white'
                                            buttonText='Punjabi'
                                            backgroundColor='#333333'
                                            imageSource={require('../assets/punjabi.jpeg')}
                                            onPress={()=>this.props.navigation.navigate('Playlist')}
                                        />
                                        <Button
                                            height={45}
                                            width={175}
                                            color='white'
                                            buttonText='Bollywood'
                                            backgroundColor='#333333'
                                            imageSource={require('../assets/bollywood.jpeg')}
                                            onPress={()=>this.props.navigation.navigate('Playlist')}
                                        />
                                        <Button
                                            height={45}
                                            width={175}
                                            color='white'
                                            buttonText='Indian Webseries'
                                            backgroundColor='#333333'
                                            imageSource={require('../assets/webseries.jpeg')}
                                            onPress={()=>this.props.navigation.navigate('Playlist')}
                                        />
                                    </View>
                                </View>
                                <View style={styles.albumContainer}>
                                    <Album
                                        title={Album_Data[0].title}
                                        data={Album_Data[0].albums}
                                        onPress={()=>this.props.navigation.navigate('Playlist')}
                                    />
                                    <Album
                                        title={Album_Data[1].title}
                                        data={Album_Data[1].albums}
                                        onPress={()=>this.props.navigation.navigate('Playlist')}
                                    />
                                    <Album
                                        title={Album_Data[2].title}
                                        data={Album_Data[2].albums}
                                        onPress={()=>this.props.navigation.navigate('Playlist')}
                                    />
                                    <Album
                                        title={Album_Data[3].title}
                                        data={Album_Data[3].albums}
                                        onPress={()=>this.props.navigation.navigate('Playlist')}
                                    />
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                    {/* <View style={{marginBottom:100}}>
                        <Text>Hello</Text>
                    </View> */}
                </ScrollView>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
    list:state.authReducer
    }
}
export default connect(mapStateToProps)(Home)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    linearGradient: {
        flex: 1,
        paddingBottom:50
    },
    subcontainer: {
        top: vh(60),
        bottom: vh(50)
    },
    greetText: {
        color: 'white',
        fontSize: vh(20),
        fontWeight: '700'
    },
    headerContainer: {
        left: vw(10),
        right: vw(10)
    },
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    leftcornerButtons: {
        flexDirection: 'row',
        right: vw(20)
    },
    buttonPlayed: {
        right: vw(20)
    },
    recentlyPlayedAlbum: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: vh(20)
    },
    albumBoxes: {
        right: vw(20)
    },
    scroll: {
       flex:1,
       backgroundColor:'black'
    },
    albumContainer:{
        marginTop:vh(50)
    }
})