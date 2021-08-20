import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image ,FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { vw, vh, normalize } from '../dimension/dimension'
import Drawer from '../screen/menuDrawer'
import { connect } from 'react-redux'
class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    style={styles.linear}
                    colors={['black', 'black', 'black', 'grey', 'grey']}
                    useAngle={true}
                    angle={0}
                >
                    <SafeAreaView style={styles.safeArea}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Image style={styles.backImage} source={require('../assets/back.png')}/>
                        </TouchableOpacity>
                    </SafeAreaView>
                    <View style={styles.subContainer}>
                        <View style={styles.profileComponent}>
                            <View style={styles.imageContainer}>
                            <Image style={styles.profileImage} source={require('../assets/profile/profile.png')}/>
                            </View>
                            <Text style={styles.profileName}>{this.props.name}</Text>
                        </View>
                    </View>
                </LinearGradient>
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
export default connect(mapStateToProps)(Profile)
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linear: {
        flex: 1
    },
    safeArea:{
        height:vh(70)
    },
    backImage: {
        height: vh(20),
        width: vw(20),
        tintColor: 'white',
        marginLeft:vw(15),
        marginTop:vh(10)
    },
    subContainer:{
        marginLeft:vw(15),
        marginRight:vw(15)
    },
    profileComponent:{
        alignItems:'center'
    },
    profileImage:{
        height:vh(120),
        width:vw(120),
        tintColor:'#232322'
    },
    profileName:{
        color:'white',
        fontSize:vh(20),
        fontWeight:'700'
    },
    imageContainer:{
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 8,
    }
})