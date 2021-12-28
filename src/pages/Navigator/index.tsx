import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "../LaunchScreen";

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator /*initialRouteName="loading"*/ >
                <Stack.Screen 
                        name="launch"
                        component={LaunchScreen}
                        options={{ 
                            headerShown: false, 
                            gestureEnabled: false,
                        }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;