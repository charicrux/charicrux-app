import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "../LaunchScreen";
import CreateAccountScreen from "../CreateAccountScreen";
import { Screens } from "./enums";

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator /*initialRouteName="loading"*/ >
                <Stack.Screen 
                        name={Screens.Initial.LAUNCH}
                        component={LaunchScreen}
                        options={{ 
                            headerShown: false, 
                            gestureEnabled: false,
                        }}
                />
                <Stack.Screen 
                        name={Screens.Account.CREATE}
                        component={CreateAccountScreen}
                        options={{ 
                            headerShown: false, 
                            gestureEnabled: true,
                        }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;