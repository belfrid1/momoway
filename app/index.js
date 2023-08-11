import { Dimensions, SafeAreaView, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

import {RootStackParamList} from "../types";




const { height } = Dimensions.get("window");


type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;
const WelcomeScreen: React.FC<Props> = ({navigation: {navigate} }) => {
    return (
         <SafeAreaView>
            <View>
                <ImageBackground 
                style={{
                    height: height / 2.5,
                    }}
                    resizeMode="contain"
                    source={require("../assets/images/welcome-img.png")}/>
                <View style={{
                    paddingHorizontal: Spacing * 4,
                    paddingTop: Spacing * 4,
                }}>
                    <Text 
                    style={{
                        fontSize: FontSize.xxLarge,
                        color: Colors.primary,
                        fontFamily: Font["popins-bold"],
                        textAlign: "center",
                    }}>
                        Connectez vous ici
                    </Text>

                    <Text 
                    style={{
                        fontSize: FontSize.small,
                        color: Colors.text,
                        fontFamily: Font["popins-bold"],
                        textAlign: "center",
                        marginTop: Spacing * 2,
                    }}>
                        Explorer tous les jobs basés sur votre domaine d'expertise
                    </Text>
                </View>

                <View style={{
                    paddingHorizontal: Spacing * 2,
                    paddingTop: Spacing * 6,
                    flexDirection: "row",

                }} >
                    <TouchableOpacity 
                    onPress={()=>navigate("Login")}
                    style={{
                        backgroundColor:Colors.primary,
                        paddingVertical:Spacing*1.5,
                        paddingHorizontal: Spacing * 2,
                        width: "48%",
                        borderRadius: Spacing, 
                        shadowColor: Colors.primary,
                        shadowOffset: {
                            width: 0,
                            height:Spacing,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: Spacingn,     
                    }} >
                        <Text style={{
                            fontFamily: Font["popins-bold"],
                            color: Colors.onPrimary,
                            fontSize: FontSize.large,
                            textAlign:"center"
                        }}>
                            Se Connecter
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                    onPress={()=>navigate("Register")}
                    style={{
                        backgroundColor:Colors.primary,
                        paddingVertical:Spacing*1.5,
                        paddingHorizontal: Spacing * 2,
                        width: "48%",
                        borderRadius: Spacing,                        
                    }} >
                        <Text style={{
                            fontFamily: Font["popins-bold"],
                            color: Colors.text,
                            fontSize: FontSize.large,
                            textAlign:"center"
                        }}>
                            S'inscrire
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
         </SafeAreaView>
    )
};

export default WelcomeScreen;

const styles = StyleSheet.create({});