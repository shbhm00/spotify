import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity,StyleSheet} from 'react-native'
import {vh,vw,normalize} from '../dimension/dimension'

export default class Search extends React.Component {
    _renderItem=({item})=>{
        return(
            
        <View style={styles.container2}>
            <TouchableOpacity onPress={this.props.onPress}>
            <Image style={styles.imageContainer} source={{uri:item.imageUri}}/>
            <Text style={styles.albumText}>{item.artistsHeadline}</Text>
            </TouchableOpacity>
        </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <FlatList
                    horizontal={true}
                    data={this.props.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        marginTop:vh(15)
    },
    albumText:{
        color:'grey',
    },
    imageContainer:{
        width:'100%',
        height:vh(150),
    },
    container2:{
        width:vw(150),
        marginEnd:vw(10),
        marginBottom:vh(20)
    },
    title:{
        color:'white',
        fontSize:vh(25),
        fontWeight:'500',
        marginBottom:vh(20)
    }
})