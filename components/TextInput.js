import React from 'react';
import {   View ,TextInput as Input, Text} from 'react-native';
import {Entypo, } from "@expo/vector-icons";
import {theme} from "../constants/Colors";


export const RenderCaption = ({text, color = theme.default.primary, ...props}) => {
    return (
        <View style={{marginBottom: text ? 10 : 0}} {...props}>
            <Text style={{color: color}}>{text}</Text>
        </View>
    )
}


export default function TextInput({ errorText, name, isSecure, description,label,withLabel=true,style, ...props }) {

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    return (
        <View className="border-lg mx-2">
            {withLabel && <Text
                   className="mb-1 self-start font-semibold text-lg leading-5">{label}</Text>}
            {
                isSecure ? (
                    <View style={{backgroundColor: theme.default.input,borderWidth:1, borderColor:theme.default.input,   }}
                          className="flex flex-row rounded-lg justify-center content-center">
                        <Input
                            className="flex-1 rounded-lg p-3"
                            style={{backgroundColor: theme.default.input,  }}
                            secureTextEntry={secureTextEntry}
                            underlineColorAndroid="transparent"
                            cursorColor={theme.default.primary}
                            placeholder={label}
                            {...props}
                        />
                        <Entypo onPress={toggleSecureEntry} color={theme.default.primary} style={{textAlign:"center", alignSelf: "center",marginRight:10}} size={22} name={secureTextEntry ? 'eye-with-line' : 'eye'}/>
                    </View>
                ) : (
                    <Input
                        selectionColor={theme.default.primary}
                        className="rounded-lg p-3"
                        style={{backgroundColor:theme.default.input , borderWidth:1, borderColor:theme.default.input}}
                        underlineColorAndroid="transparent"
                        cursorColor={theme.default.primary}
                        placeholder={label}
                        {...props}
                    />
                )
            }
            <RenderCaption color={errorText ? theme.default.danger : "#333"} text={errorText ? errorText : description}/>
        </View>
    );
};

export function TextArea({ errorText, name, isSecure, description,label,style, ...props }) {


    const renderCaption = () => {
        return (
            <View className="mb-1">

                {
                    description && !errorText ? (
                        <Text style={{color: theme.default.danger}}>{description}</Text>
                    ) : (

                        <Text style={{color: theme.default.danger}}>{errorText}</Text>
                    )
                }
            </View>
        )
    }

    return (
        <View className="border-lg">
            <Text style={{color: theme.default.primary}} className="mb-1 self-start font-bold text-lg leading-5" >{label}</Text>
            <Input
                selectionColor={theme.default.primary}
                className="rounded-lg p-3"
                style={{backgroundColor: theme.default.white, textAlignVertical: 'top', elevation: 0.6}}
                underlineColorAndroid="transparent"
                cursorColor={theme.default.primary}
                placeholder={label}
                {...props}
            />
            {renderCaption()}
        </View>
    );
};