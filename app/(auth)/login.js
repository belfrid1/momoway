import React, {useState} from 'react';
import {Dimensions, Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {Link, Stack, useRouter} from "expo-router";
import TextInput from "../../components/TextInput";
import {Button} from "../../components/Button";
import {theme} from "../../constants/Colors";
import Logo from "../../components/logo";
import { Formik } from 'formik';



const LoginScreen = () => {
    const navigation = useRouter();
    const [selected, setSelected] = useState('Email')



    return (
        <>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <Logo/>
            <View style={styles.form}>
               
                <View className="mx-2 mb-10 justify-center items-center" >
                    <Text className="font-bold " style={{fontSize: 34}}>{'Connexion'}</Text>
                    <Text className="text-gray text-center text-base px-5" style={{color: theme.default.text}}>Heureux de vous revoir. Veuillez remplir le formulaire pour vous connecter...</Text>
                </View>
                <Formik
                    initialValues={{ password:'',email:'', phone: ''}}
                    onSubmit={(values) => handleSubmit(values)}
                    validateOnChange={false}
                >
                {formikProps => (
                        <>
                            <TextInput
                                label={"Email"}
                                name={'email'}                       
                                isSecure={false}
                                description={''}
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <TextInput
                                label={ "Password"}
                                value={formikProps.values.password}
                                isSecure={true}
                                description={''}
                                returnKeyType="next"
                            />
                            
                            <View className="my-4">
                                <Button title="Se connecter"  onPress={formikProps.handleSubmit} />
                            </View>
                        </>
                         )}
                    </Formik>
         
            
            </View>
        </KeyboardAvoidingView>
        <View className="flex-row text-center justify-center items-center p-2" style={{paddingHorizontal:10, backgroundColor: "#fff"}}>
            <View style={{width: Dimensions.get('screen').width/2, borderRightWidth: 2, borderColor: "#BEBEBE"}}>
                <Link href="/forget" asChild>
                    <Pressable >
                        {({ hovered, pressed }) => (
                            <Text className="text-center text-base font-semibold" >Mot de passe oublié?</Text>
                        )}
                    </Pressable>
                </Link>
            </View>
        
            <View style={{width: Dimensions.get('screen').width/2}}>
                <Link href="/register" asChild>
                    <Pressable>
                        {({ hovered, pressed }) => (
                            <Text className="text-center text-base font-semibold"> Foires aux questions</Text>
                        )}
                    </Pressable>
                </Link>
            </View>

            
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff"
        
    },
    form:{
        marginHorizontal: 10,
        justifyContent: "center",
    }
});

export default LoginScreen;