import React from 'react'
import { Platform } from 'react-native';
import {View, Text,Image,StyleSheet} from 'react-native'
import {vw,vh,normalize} from '../dimension/dimension'
import { connect} from 'react-redux'
class Splash extends React.Component{

    componentDidMount(){
        setTimeout(()=>{
            // Add your logic for the transition
            {this.props.loggedIn?this.props.navigation.navigate('Bottom'):this.props.navigation.navigate('HomeScreen')} // what to push here?
        }, 2000);
    }

    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.splashLogo} source={require('../assets/spotify_green.png')}/>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    const {email,password,loggedIn} = state.authReducer
    return {
        email,password,loggedIn
    }
}
export default connect(mapStateToProps)(Splash)
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    splashLogo:{
        height:Platform.OS==="ios"?normalize(100):normalize(150),
        width:Platform.OS==="ios"?normalize(100):normalize(150)
    }
})