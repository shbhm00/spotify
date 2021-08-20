import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { vh, vw, normalize } from '../dimension/dimension'
import { connect } from 'react-redux'
import Button from '../customs/button'
import SignIn from '../screen/signin'
import Home from '../screen/home_screen'
import Profile from '../screen/profile'
import { action } from '../action/index'
class Drawer extends React.Component {

    verification_handler = () => {
        this.props.action()
        this.props.navigation.navigate('HomeScreen')
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeArea}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backImage} source={require('../assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Settings</Text>
                </SafeAreaView>
                <View style={styles.subContainer}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                            <View style={styles.profileContainer}>
                                <Image style={styles.profileIcons} source={require('../assets/profile/profile.png')} />
                                <View style={styles.profileNameText}>
                                    <Text style={styles.profileName}>{this.props.name}</Text>
                                    <Text style={styles.vieProfile}>View Profile</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                            <Image style={styles.rightArrow} source={require('../assets/profile/rightArrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.drawerContent}>
                        <Text style={styles.drawerHeading}>Account</Text>
                        <Image style={styles.rightArrow} source={require('../assets/profile/rightArrow.png')} />
                    </View>
                    <View style={styles.drawerContent}>
                        <Text style={styles.drawerHeading}>Language</Text>
                        <Image style={styles.rightArrow} source={require('../assets/profile/rightArrow.png')} />
                    </View>
                    <View style={styles.drawerContent}>
                        <Text style={styles.drawerHeading}>Devices</Text>
                        <Image style={styles.rightArrow} source={require('../assets/profile/rightArrow.png')} />
                    </View>
                    <View style={styles.drawerContent}>
                        <Text style={styles.drawerHeading}>Social</Text>
                        <Image style={styles.rightArrow} source={require('../assets/profile/rightArrow.png')} />
                    </View>
                    <View style={styles.logoutButton}>
                        <Button
                            height={Platform.OS === "ios" ? 40 : 50}
                            width={150}
                            color='black'
                            buttonText='LOG OUT'
                            backgroundColor='white'
                            onPress={this.verification_handler}
                        />
                    </View>
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
const mapDispatchToProps = (dispatch) => ({
    action: () => dispatch(action()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        color: 'white',
        fontWeight: '500',
        fontSize: normalize(15),
        marginLeft: vw(130)

    },
    safeArea: {
        backgroundColor: '#333333',
        height: normalize(85),
        flexDirection: 'row',
        alignItems: 'center',
    },
    backImage: {
        height: normalize(15),
        width: normalize(15),
        marginLeft: vw(15)
    },
    subContainer: {
        marginLeft: vw(15),
        marginRight: vw(15),
        marginTop: vh(20)
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileName: {
        fontSize: vh(20),
        color: 'white',
        fontWeight: 'bold'
    },
    vieProfile: {
        color: 'grey',
        marginTop: vh(8)
    },
    rightArrow: {
        tintColor: 'white',
        height: normalize(20),
        width: normalize(20)
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileIcons: {
        height: normalize(60),
        width: normalize(60)
    },
    profileNameText: {
        marginLeft: vw(20)
    },
    drawerContent: {
        flexDirection: 'row',
        marginTop: vh(25),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    drawerHeading: {
        color: 'white',
        fontWeight: '500',
        fontSize: vh(15)
    },
    logoutButton: {
        marginTop: vh(100)
    }
})