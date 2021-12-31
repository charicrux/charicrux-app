import React from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

const { width, height } = Dimensions.get("screen");

const HomeScreen = () => {
    const { theme: { background } } = useTheme();

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: background }]}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height
    }
});

export default HomeScreen;