import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "../LaunchScreen";
import CreateAccountScreen from "../CreateAccountScreen";
import LoginScreen from "../LoginScreen"
import CreateTokenScreen from "../CreateTokenScreen";
import { Screens } from "./enums";
import TabNavigator from "../TabNavigator";
import OrganizationScreen from "../OrganizationsScreen";
import CreateOrganizationScreen from "../CreateOrganizationScreen";
import DepositMethodsScreen from "../DepositMethodsScreen";
import CryptoTokenScreen from "../CryptoTokenScreen";
import ProfileScreen from "../ProfileScreen";
import CreateFundraiserScreen from "../CreateFundraiserScreen";
import FundraisersScreen from "../FundraisersScreen";

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
                <Stack.Screen 
                        name={Screens.Account.ORGANIZATIONS}
                        component={OrganizationScreen}
                        options={{ 
                            headerShown: false, 
                            gestureEnabled: true,
                        }}
                />
                <Stack.Screen
                        name={Screens.Account.LOGIN}
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                            gestureEnabled: true,
                        }}
                />
                <Stack.Screen
                        name={Screens.Token.CREATE}
                        component={CreateTokenScreen}
                        options={{
                            headerShown: false,
                            gestureEnabled: true,
                        }}
                />
                 <Stack.Screen
                        name={Screens.TAB_NAVIGATOR.INITIAL}
                        component={TabNavigator}
                        options={{
                            headerShown: false,
                            gestureEnabled: false,
                        }}
                />
                <Stack.Screen
                        name={Screens.Account.CREATEORG}
                        component={CreateOrganizationScreen}
                        options={{
                            headerShown: false,
                            gestureEnabled: true,
                        }}
                />
                 <Stack.Screen 
                        name={Screens.Wallet.DEPOSIT_METHODS}
                        component={DepositMethodsScreen}
                        options={{ 
                            headerShown: true,
                            headerBackTitleVisible: false,
                            headerTitle: "",
                            gestureEnabled: true,
                        }}
                />
                <Stack.Screen 
                        name={Screens.Token.INFO}
                        component={CryptoTokenScreen}
                        options={{ 
                            headerShown: true,
                            headerBackTitleVisible: false,
                            headerTitle: "",
                        }}
                />
                <Stack.Screen
                        name={Screens.Account.VIEW}
                        component={ProfileScreen}
                        options={{
                            headerShown: false,
                            gestureEnabled: true,
                        }}
                />
                <Stack.Screen
                        name={Screens.Fundraiser.CREATE}
                        component={CreateFundraiserScreen}
                        options={{
                            headerShown: true,
                            gestureEnabled: true,
                            headerBackTitleVisible: false,
                            headerTitle: "",
                        }}
                />
                <Stack.Screen
                        name={Screens.Fundraiser.VIEW}
                        component={FundraisersScreen}
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