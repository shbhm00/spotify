import React from 'react'
import Raect from 'react'
import {View,Text,StyleSheet, SafeAreaView, Platform} from 'react-native'
import {vh,vw,normalize} from '../dimension/dimension'
import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Music extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.headerContainer}>
                    <TouchableOpacity style={styles.firstLetter} onPress={()=>this.props.navigation.navigate('Drawer')}>
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
        )
    }
}
const mapStateToProps = (state) => {
    const { name } = state.authReducer
    return {
        name
    }
}
export default connect(mapStateToProps)(Music)
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    headerContainer:{
        marginTop:Platform.OS==="ios"?null:vh(20),
        marginLeft:vw(15),
        marginRight:vw(15),
        flexDirection:'row',
        alignItems:'center',
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    firstLetter:{
        height:normalize(40),
        width:normalize(40),
        backgroundColor:'#1976d2',
        borderRadius:normalize(50),
        alignItems:'center',
        justifyContent:'center'
    },
    singleText:{
        fontSize:vh(20),
        fontWeight:'700'
    },
    libraryText:{
        fontSize:vh(22),
        color:'white',
        fontWeight:'bold',
        marginLeft:vw(20)
    },
    subContainer:{
        marginLeft:vw(15),
        marginRight:vw(15),
        marginTop:vh(25)
    },
    playlist:{
        height:vh(25),
        width:vw(80),
        borderWidth:0.3,
        borderColor:'lightgrey',
        borderRadius:normalize(40),
        alignItems:'center',
        justifyContent:'center',
        marginRight:vw(10)
    },
    playlistText:{
        color:'white',
        fontSize:vh(12)
    },
    headerButtons:{
        flexDirection:'row'
    },
    favourite:{
        color:"white",
        fontSize:vh(22),
        marginTop:vh(25),
        fontWeight:'bold'
    }
})