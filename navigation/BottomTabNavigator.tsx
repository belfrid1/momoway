<BottomTab.Navigator
initialRouteName="TabOne"
tabBarOptions={{
    showLabel: false,
    activeTintColor: Colors[colorScheme].tint,
    style: {
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30,
        borderRadius: 35,
        paddingBottom: 10,
        borderTopWidth: 0,
        position: 'absolute',
        paddingHorizontal: 20,
        backgroundColor: Colors[colorScheme].tabBarBackground,
    }
}}>
<BottomTab.Screen
  name="TabOne"
  component={TabOneNavigator}
  options={{
    tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
  }}
/>
<BottomTab.Screen
  name="TabTwo"
  component={TabTwoNavigator}
  options={{
    tabBarIcon: ({ color }) => <TabBarIcon name="ios-folder-outline" color={color} />,
  }}
/>
<BottomTab.Screen
  name="TabThree"
  component={TabTwoNavigator}
  options={{
    tabBarIcon: ({ color }) => <TabBarIcon name="ios-chatbox-outline" color={color} />,
  }}
/>
<BottomTab.Screen
  name="TabFour"
  component={TabTwoNavigator}
  options={{
    tabBarIcon: ({ color }) => <TabBarIcon name="ios-cog" color={color} />,
  }}
/>
</BottomTab.Navigator>