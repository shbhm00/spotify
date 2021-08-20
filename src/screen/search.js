import React from 'react'
import Raect from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image,TouchableOpacity} from 'react-native'
import { vh, vw } from '../dimension/dimension';
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { SearchBar } from 'react-native-elements';
import SearchItem from '../customs/seachItems'
import SearchData from '../dummy_data/searchData'
import { Platform } from 'react-native';

export default class Search extends React.Component {
    state = {
        search: '',
    };
    render() {
        return (
            <View style={styles.container}>
                 {/* <SafeAreaView>

                 </SafeAreaView> */}
                 <SearchItem
                 onPress={()=>this.props.navigation.navigate('Playlist')}
                 Data_item={SearchData}
                 ListHeaderComponent={
                     
                 <View style={styles.subContainer}>
                     <SafeAreaView></SafeAreaView>
                 <View style={styles.headerContainer}>
                     <TouchableOpacity>
                     <Text style={styles.searchText}>Search</Text>
                     </TouchableOpacity>
                     {Platform.OS==="ios"?<TouchableOpacity>
                     <Image style={styles.cameraImg} source={require('../assets/camera.png')} />
                     </TouchableOpacity>:null}
                 </View>
                 <Text style={styles.title}>Browse all</Text>
             </View>}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    subContainer: {
        left: vw(10),
        right: vw(10),
    },
    searchText: {
        color: 'white',
        fontSize:Platform.OS==="ios"? vh(20):vh(30),
        fontWeight: 'bold'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:Platform.OS==="ios"?null:vh(20)
    },
    cameraImg: {
        right: vw(20)
    },
    title: {
        color: 'white',
        fontSize: vh(15),
        fontWeight: '500',
        top:vh(40),
        marginBottom:vh(70)
    },
})