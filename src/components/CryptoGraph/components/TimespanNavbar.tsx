import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../hooks/useTheme";

const { width } = Dimensions.get("window");

const TimespanNavbar = () => {  
    const { theme } = useTheme();

    return (
        <View style={[styles.container ]}>
            <View style={[ styles.navbar,  { backgroundColor: theme.background }]}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 22.5,
        borderRadius: 5,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        transform: [{ translateY: -10 }]
    },
    navbar: {
        height: 22.5,
        borderRadius: 5,
        width: 300,
    }
});

export default TimespanNavbar;