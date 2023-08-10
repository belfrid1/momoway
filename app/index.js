import { Dimensions, SafeAreaView, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";


const { height } = Dimensions.get("window");
const WelcomeScreen = () => {
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
                    paddingVertical: Spacing*4
                }} >
                    <TouchableOpacity style={{
                        backgroundColor:Colors.primary,
                        paddingVertical:Spacing*1.5,
                        paddingHorizontal: Spacing * 2,
                        width: "48%",
                        
                    }} >
                        <Text>
                            Se Connecter
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
         </SafeAreaView>
    )
};

export default WelcomeScreen;

const styles = StyleSheet.create({});