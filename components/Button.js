
import React from 'react';
import {Text, Pressable, ActivityIndicator} from 'react-native';
import {theme} from "../constants/Colors";
import {Entypo} from "@expo/vector-icons";

export const Button = ({ title, onPress,icon, loading = false, outline=false, color=theme.default.primary }) => {
    const background = outline ? theme.default.white : color
    const textColor = outline ? color : theme.default.white

    return (
        <Pressable
            activeOpacity={0.7}
            disabled={loading}
            onPress={onPress}
            className="flex flex-row rounded-lg justify-center items-center p-4 m-2"
            style={{
                backgroundColor: background,
                borderWidth: 0.5,
                borderColor: textColor
            }}>
            {loading && <ActivityIndicator color={textColor} className="mr-5" size={"small"}/>}
            {icon &&  <Entypo name={icon} size={28} color={textColor} />}
            <Text
                style={{color: textColor}}
                className="self-center uppercase text-2xl text-base leading-5 font-semibold">
                {title}
            </Text>
        </Pressable>
    );
};