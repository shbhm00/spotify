import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Modal ,Platform} from 'react-native'
import { vh, vw, normalize } from '../dimension/dimension'
import CustomTextInput from '../customs/customTextInput'
import Button from '../customs/button'
import { Dimensions } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
export default class HomeScreen extends React.Component {
    componentDidMount(){
        if(Platform.OS==="android")
        {
        GoogleSignin.configure({
            webClientId: '998416061274-7ihqqtfn3mdkhlokufg3lbmj4hamfr3p.apps.googleusercontent.com',
          });
        }
    }
    // GoogleSignIn=()=> {
    //     try{
    //     // Get the users ID token
    //     const { idToken } =GoogleSignin.signIn();
      
    //     // Create a Google credential with the token
    //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
    //     // Sign-in the user with the credential
    //     return auth().signInWithCredential(googleCredential);
    //     }
    //     catch{
    //         console.log({error});
    //     }
    // }
    render() {
        async function onGoogleButtonPress() {
            try{
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
          
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
            }
            catch(error){
                console.log({error});
            }
          }
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backImage}
                    source={{uri:'https://thumbs.dreamstime.com/z/collage-portraits-young-musicians-multicolored-background-neon-collage-portraits-young-emotional-talented-175283811.jpg'}}
                >
                    <View style={styles.upperContainer}>
                        <View style={styles.textContainer}>
                        <Image style={styles.logoImg} source={require('../assets/spotify_logo_white.png')} />
                            <Text style={styles.quatationText}>Millions of songs.</Text>
                            <Text style={styles.quatationText}>Free on Spotify.</Text>
                        </View>
                    </View>
                    </ImageBackground>
                    <View style={styles.lowerContainer}>
                        <View style={styles.buttonContainer}>
                        <Button
                            height={Platform.OS==="ios"? 45:60}
                            width={300}
                            imageSource={null}
                            color='black'
                            borderColor='transparent'
                            backgroundColor='green'
                            buttonText='Sign up free'
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        />
                        <Button
                            height={Platform.OS==="ios"? 45:60}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with phone number'
                            imageSource={require('../assets/mobile.png')}
                        />
                        <Button
                            height={Platform.OS==="ios"? 45:60}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Google'
                            imageSource={require('../assets/google.png')}
                            onPress={onGoogleButtonPress}
                        />
                        <Button
                            height={Platform.OS==="ios"? 45:60}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Facebook'
                            imageSource={require('../assets/facebook.png')}
                            onPress={()=>alert('Coming Soon')}
                        />
                        {Platform.OS==='ios'?
                        <Button
                            height={45}
                            width={300}
                            color='white'
                            borderColor='grey'
                            buttonText='Continue with Apple'
                            imageSource={require('../assets/apple.png')}
                            onPress={()=>alert('Coming Soon')}
                        />
                    :null}
                        <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('SignIn')}>Log in</Text>
                        </View>
                    </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backImage: {
        flex:0.7
    },
    upperContainer: {
        flex: 3,
        backgroundColor: 'rgba(0,0,0,0.82)',
    },
    lowerContainer: {
        flex: 0.75,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.85)'
    },
    logoImg: {
        marginTop: vh(10),
        marginBottom:vh(10),
        height: normalize(55),
        width: normalize(55)
    },
    quatationText: {
        color: 'white',
        fontSize:Platform.OS==="ios"?vh(29):vh(32),
        fontWeight: '700',
        marginBottom: vh(10)
    },
    textContainer: {
        alignItems:'center',
        justifyContent:'center',
        top:vh(180)
    },
    loginText: {
        color: 'white',
        fontWeight: '500',
        marginTop: vh(20),
        fontSize:Platform.OS==="ios"?16:vh(17),
        fontWeight:'bold'
    },
    buttonContainer:{
        marginTop:vh(30),
        alignItems:'center'
    }
})