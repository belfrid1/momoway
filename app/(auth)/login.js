import React, {useState} from 'react';
import {Dimensions, Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {Link, Stack, useRouter} from "expo-router";
import TextInput from "../../components/TextInput";
import {Button} from "../../components/Button";
import {theme} from "../../constants/Colors";
import { Formik } from 'formik'


const LoginScreen = () => {
    const navigation = useRouter();
    const [selected, setSelected] = useState('Email')



    const handleSubmit = async (values) => {
        try {
            const data = await login(values)
            if(data){
                navigation.push('/')
            }
        } catch (err) {

        }

    };

    return (
        <>
        
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
           
            <View style={styles.form}>
               
                <View className="mx-2 mb-10 justify-center items-center" >
                    <Text className="font-bold " style={{fontSize: 34}}>Text</Text>
                    <Text className="text-gray text-center text-base px-5" style={{color: theme.default.text}}>hhhs</Text>
                </View>
                <Formik
                    initialValues={{ password:'',email:'', phone: ''}}
                    onSubmit={(values) => handleSubmit(values)}
                    validate={validate}
                    validateOnChange={false}
                >
                    {formikProps => (
                        <>
                            
                            <TextInput
                                label={"label"}
                                name={'email'}
                                value={formikProps.values.email}
                                onChangeText={formikProps.handleChange('email')}
                                isSecure={false}
                                error={!!formikProps.errors.email}
                                errorText={formikProps.errors.email}
                                description={''}
                                returnKeyType="next"
                                blurOnSubmit={false}
                            />
                            <TextInput
                                label={ "label"}
                                value={formikProps.values.password}
                                onChangeText={formikProps.handleChange('password')}
                                error={!!formikProps.errors.password}
                                errorText={formikProps.errors.password}
                                isSecure={true}
                                description={''}
                                returnKeyType="next"
                            />
                           
                            <View className="my-4">
                                <Button title="title" loading={isLoading} onPress={formikProps.handleSubmit}/>
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
                            <Text className="text-center text-base font-semibold" >forget passord</Text>
                        )}
                    </Pressable>
                </Link>
            </View>
        
            <View style={{width: Dimensions.get('screen').width/2}}>
                <Link href="/register" asChild>
                    <Pressable>
                        {({ hovered, pressed }) => (
                            <Text className="text-center text-base font-semibold"> faq</Text>
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