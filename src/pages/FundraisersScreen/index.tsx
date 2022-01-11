import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../../hooks/useTheme";

const { width, height } = Dimensions.get("window");

const FundraisersScreen = () => {
    const { theme } = useTheme();

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
    }  
});

export default FundraisersScreen;