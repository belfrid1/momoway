import { Dimensions, SafeAreaView, ScrollView,ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {React, useState} from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import { Stack } from "expo-router"; 
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";


const { height } = Dimensions.get("window");



//type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;
const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async ()=>{
        try {
            const response = await axios.post('http://192.168.100.109:8081/api/login',
            {
                username,
                password
            });
            console.log('success+',"ok");
            const token = response.data.token;
             navigation.navigate('home')


        }catch (error){
            if(error.response){
                console.log('data+',error.response.data);
                console.log('status+',error.response.status);
                console.log('header+',error.response.headers);
            }else if (error.request){
                console.log('request+',error.request);
            }else{
                // Erreur inattendue
                console.log('Error+', error.message);
            }
           
        }
    };

    return (
       <ScrollView>
        <Stack.Screen options={{headerShown:false}}></Stack.Screen>
        <SafeAreaView>
            <View 
            style={{
                padding: Spacing*2,

                }} >   
                <View style={{
               alignItems:"center",

                }} >
                    <Text style={{ 
                    fontSize: FontSize.xLarge,
                    color: Colors.primary,
                    marginVertical: Spacing*3,
                    }}>Connexion</Text>
                    <Text 
                    style={{ 
                        fontSize: FontSize.large,
                        //fontFamily: Font["poppins-semiBold"],
                        }}>Connecter vous ici</Text>
                </View>  

                <View 
                    style={{
                        marginVertical: Spacing *3
                    }}>
                    <TextInput 
                    
                        placeholder="Email"
                        placeholderTextColor={Colors.darkText}
                        style={{
                            fontSize: FontSize.small,
                            padding: Spacing * 2,
                            backgroundColor: Colors.lightPrimary,
                            borderRadius: Spacing,
                            marginVertical: Spacing,
                        }}
                        onChangeText={(username) => setUsername(username)}
                        />

                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor={Colors.darkText}
                        style={{
                            fontSize: FontSize.small,
                            padding: Spacing * 2,
                            backgroundColor: Colors.lightPrimary,
                            borderRadius: Spacing,
                            marginVertical: Spacing,
                        }}
                        onChangeText={(password) => setPassword(password)}/>

                   
                </View>     

                <View>
                    <Text 
                    style={{
                        fontSize: FontSize.small,
                        color: Colors.primary,
                        alignSelf: "flex-end",
                    }}>
                        Mot de passe oublié
                    </Text>
                </View> 

                <TouchableOpacity onPress={handleLogin} style={{
                    padding: Spacing * 2,
                    backgroundColor: Colors.primary,
                    marginVertical: Spacing*3,
                    borderRadius: Spacing,

                }}>
                    <Text style={{
                        color: Colors.onPrimary,
                        textAlign: "center",
                        fontSize: FontSize.large,

                    }} > 
                        Se connecter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding: Spacing,
                }}>
                    <Text style={{
                        
                        textAlign: "center",
                        color: Colors.text,
                        fontSize: FontSize.small,

                    }}>
                        Créer un compte
                    </Text>
                </TouchableOpacity>
            </View> 
        </SafeAreaView>
        </ScrollView>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({});