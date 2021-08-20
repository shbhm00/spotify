import React from 'react'
import Raect from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { vh, vw, normalize } from '../dimension/dimension'
import unselected from '../assets/rightTick/inactive_rightTick.png'
import selected from '../assets/rightTick/rightTick.png'
import transparent from '../assets/rightTick/transparent.png'
import Playlist from '../screen/playlistScreen'
export default class Search extends React.Component { 
    _renderItem = ({ item }) => {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.itemButton} onPress={this.props.onPress}>
                    <View style={[styles.container2, { backgroundColor: item.backgroundColor }]}>
                        <Text style={styles.albumText}>{item.title}</Text>
                        <View style={styles.cornerImage}>
                            <Image style={styles.imageContainer} source={{ uri: item.imageUri }} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ListHeaderComponent={this.props.ListHeaderComponent}
                    numColumns={2}
                    data={this.props.Data_item}
                    renderItem={this._renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
    albumText: {
        color: 'white',
        fontSize: vh(15),
        fontWeight: 'bold',
        paddingTop: vh(10),
        paddingLeft: vw(10)
    },
    imageContainer: {
        width: vw(70),
        height: vh(70),
        margin: 10,
        transform: [{ rotate: '25deg' }],
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    container2: {
        width: vw(170),
        height: vh(90),
        marginStart: normalize(10),
        marginEnd: normalize(10),
        marginBottom: vh(3),
        borderRadius: 5,
        overflow: 'hidden'
    },
    title: {
        color: 'white',
        fontSize: vh(15),
        fontWeight: '500',
        left: vw(10),
        top: vh(100),
        bottom: vh(20)
    },
    cornerImage: {
        position: 'absolute',
        overflow: 'hidden',
        top: 10,
        right: -36
    },
    buttonContainer: {
        marginBottom: vh(10)
    }
})