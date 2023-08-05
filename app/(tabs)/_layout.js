import React, {useRef, useState, useEffect} from 'react';
import { Tabs } from "expo-router";
import { Dimensions, Pressable, Text, View, AppState} from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";


function MyTabBar({ state, descriptors, navigation }) {
  return (
    
    <View className="" style={{borderTopLeftRadius:10,borderTopRightRadius:10,flexDirection: 'row', justifyContent:"space-between",   margin:0, backgroundColor: 'white' , alignSelf: 'center',
          position: 'relative',
          bottom: 0,}}>
          {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                  options.tabBarLabel !== undefined
                      ? options.tabBarLabel
                      : options.title !== undefined
                          ? options.titlen
                          : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                  const event = navigation.emit({
                      type: 'tabPress',
                      target: route.key,
                      canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                      navigation.navigate({ name: route.name, merge: true });
                  }
              };

              const onLongPress = () => {
                  navigation.emit({
                      type: 'tabLongPress',
                      target: route.key,
                  });
              };


              if(route.name == "map"){
                    return <Pressable onPress={onPress} style={{ position:"absolute", 
                      left: Dimensions.get('screen').width/2.3, 
                      bottom:5,elevation:3,
                      backgroundColor: theme.default.primary,
                      borderRadius: 50,
                      width:50,height:50,
                      padding:10,alignItems: "center",
                      justifyContent: "center"
                      }}>
                      <MaterialIcons name="qr-code-scanner" size={25}  color={theme.default.white}/>
                    </Pressable>
              }

              return (
                  <Pressable
                      key={index}
                      accessibilityRole="button"
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={options.tabBarTestID}
                      onPress={onPress}
                      onLongPress={onLongPress}
                      style={{ flex: 1,
                          justifyContent: "flex-end",
                          alignItems:"center",
                          alignSelf: "center",
                          backgroundColor: 'transparent',
                      }}
                  >

                      <View className="content-center justify-center flex-col"
                            style={{
                                backgroundColor: isFocused ? theme.default.white : 'transparent',
                                width: 30,
                                aspectRatio: 2/2,
                                borderRadius: 5,
                            }}
                      >
                          <MaterialCommunityIcons name={options.icon} style={{textAlign: "center", alignSelf:"center",justifyContent:"center", alignItems:"center"}} color={isFocused ? theme.default.primary : theme.default.text} size={30} />
                      </View>
                      <Text style={{fontSize: 12, color: isFocused ? theme.default.primary : theme.default.text}}>{options.title}</Text>
                  </Pressable>
              );
          })}
      </View>
     
  );
}

export default function AppLayout() {

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [showPinLockScreen,setShowPinLockScreen ] = useState(false)

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        setShowPinLockScreen(true)
      }else{
        setShowPinLockScreen(false)
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if(showPinLockScreen){
    return <PinLock onProcessFinish={() => setShowPinLockScreen(false)}/>
  }


  return (
    <Tabs   
      initialRouteName="home"
      screenOptions={{
          headerShown: false,
          tabBarStyle: { position: 'absolute' },
          tabBarBackground: () => (
            <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
          ),
      }}
      tabBarHideOnKeyboard={true}
      tabBar={props => <MyTabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          title: $t('home'),
          icon: "home",
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
            presentation: "modal",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: $t('account'),
          icon: "account",
        }}
      />
    </Tabs>
  );
}