import React from 'react'
import Raect from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { vh, vw, normalize } from '../dimension/dimension'
import unselected from '../assets/rightTick/inactive_rightTick.png'
import selected from '../assets/rightTick/rightTick.png'
import transparent from '../assets/rightTick/transparent.png'
import Button from '../customs/button'
import Bottom from '../screen/bottomtab'
export default class Search extends React.Component {
    state = {
        id: null,
        array: []
    }
    active_pass = (x) => {
        if (this.state.array.includes(x)) {
            let array1 = [...this.state.array]
            array1 = array1.filter((item) => item != x)
            this.setState({ array: array1 })
        }
        else {
            let array1 = [...this.state.array,x]
            // array1.push(x)
            this.setState({ array: array1 })
        }
    };
    _renderItem = ({ item }) => {
        return (
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.itemButton} onPress={() => this.active_pass(item.id)}>
                    <View style={[styles.container2, { backgroundColor: item.backgroundColor }]}>
                        <Text style={styles.albumText}>{item.title}</Text>
                        <View style={styles.cornerImage}>
                            <Image style={styles.imageContainer} source={{ uri: item.imageUri }} />
                        </View>
                        {this.state.array.includes(item.id) ? <Image style={{ position: 'absolute', right: 4, top: 2 }} source={require('../assets/rightTick/rightTick.png')} /> : null}
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
                {this.state.array.length>=1&& <View style={styles.bottomContainer}>
                    <Button
                        height={Platform.OS==="ios"?40:50}
                        width={130}
                        color='black'
                        buttonText='Next'
                        backgroundColor="white"
                        onPress={this.props.onPress1}
                    />
                </View>}
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
    },
    bottomContainer:{
        marginTop:vh(25)
    }
})