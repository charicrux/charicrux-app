import "react-native-gesture-handler";
import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import React from "react";
import { TabNavigatorScreens } from "./enums";
import HomeScreen from "../HomeScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useTheme } from "../../hooks/useTheme";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHandHoldingUsd, faHome, faSearch, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Screens } from "../Navigator/enums";
import ProfileScreen from "../ProfileScreen";
import FundraisersScreen from "../FundraisersScreen";
import SearchTokensScreen from "../SearchTokensScreen";

type TabIconProps = {
    focused: boolean,
    iconSize?: number,
    icon: IconProp,
}

const TabIcon : React.FC<TabIconProps> = ({ focused, iconSize, icon, ...props }) => {
    const size = iconSize || 25; 
    const { palette } = useTheme();

    const iconColor = focused ? "#fff" : palette.primary;

    return (
        <FontAwesomeIcon 
            color={iconColor}
            size={size} 
            icon={icon} 
            { ...props } 
        />
    );
};


export const TabNavigator = ({ navigation, ...props } : any) => {
    const { theme } = useTheme();
    const Tabs = createBottomTabNavigator();

    const handleAccount = () => {
        navigation.navigate(Screens.Account.VIEW);
    }

    return (
        <>
            <Tabs.Navigator 
                initialRouteName={TabNavigatorScreens.HOME}
                screenOptions={({ route } : any) => ({
                    tabBarIcon: ({ focused } : { focused: boolean }) => {
                        switch(route.name) {
                            case TabNavigatorScreens.HOME: {
                                return <TabIcon icon={faHome} focused={focused} />;
                            }
                            case TabNavigatorScreens.ACCOUNT: {
                                return <TabIcon icon={faUserAlt} focused={focused} />;
                            }
                            case TabNavigatorScreens.SEARCH_TOKENS: {
                                return <TabIcon icon={faSearch} focused={focused} />
                            }
                            case TabNavigatorScreens.CREATE_FUNDRAISER: {
                                return <TabIcon iconSize={30} icon={faHandHoldingUsd} focused={focused} />
                            }
                            default: {
                                return; 
                            }
                        }
                    },
                    tabBarStyle: {
                        backgroundColor: theme?.secondary,
                        borderTopColor: theme.secondary,
                        shadowColor: "#000",
                        shadowOffset: { height: -10, width: 0 },
                        shadowRadius: 10,
                        zIndex: 1,
                        elevation: 1,
                        shadowOpacity: 0.1,

                    },
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIconStyle: {
                        marginTop: 15,
                    },
            })}
                >
                    
                    <Tabs.Screen 
                        name={TabNavigatorScreens.HOME} 
                        component={HomeScreen}
                        
                    />
                     <Tabs.Screen 
                        name={TabNavigatorScreens.SEARCH_TOKENS} 
                        children={() => <SearchTokensScreen navigation={navigation} { ...props } />}
                    />
                    <Tabs.Screen 
                        name={TabNavigatorScreens.CREATE_FUNDRAISER} 
                        children={() => <FundraisersScreen navigation={navigation} { ...props } />}
                    />
                    <Tabs.Screen 
                        name={TabNavigatorScreens.ACCOUNT} 
                        children={() => <ProfileScreen navigation={navigation} { ...props } />}
                    />
            </Tabs.Navigator>
        </>
    )
}

export default TabNavigator;