import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const index = () => {
 /*  return ( 
  <View>
    <Text> Welome</Text>
  </View>) */
  return <Redirect href="/login" />;
};
export default index;