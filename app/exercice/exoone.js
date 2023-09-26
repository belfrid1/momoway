import { Dimensions, SafeAreaView, ImageBackground, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";

import { useRouter } from "expo-router";




const { height } = Dimensions.get("window");


//type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;
const WelcomeScreen = () => {
    const router = useRouter();
    return (
         <SafeAreaView>
           <Text>Texte je suis la </Text>
         </SafeAreaView>
    )
};

export default WelcomeScreen;

const styles = StyleSheet.create({});