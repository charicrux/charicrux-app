import React, { ReactChild } from "react";
import { Dimensions, StyleProp, StyleSheet, View, ViewStyle, Text } from "react-native";
import { useTheme } from "../../hooks/useTheme";

interface IBrandContainerProps {
    header: string,
    style?: StyleProp<ViewStyle>,
    children: ReactChild,
}

const { width } = Dimensions.get("screen");

const BrandContainer : React.FC<IBrandContainerProps> = ({ header, style, children }) => {
    const { theme: { background, secondary, text }} = useTheme();

    return (
        <View style={[ styles.container, { backgroundColor: secondary }, style]}>
            <View style={[styles.headerContainer, { backgroundColor: background }]}>
                <Text style={[styles.header, { color: text }]}>{ header }</Text>
            </View>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        minHeight: 100,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerContainer: {
        minWidth: 125,
        width: width * 0.35,
        maxWidth: 250,
        paddingVertical: 7.5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        marginBottom: 10,
    },
    header: {
        fontSize: 12,
        fontWeight: "500",
    }
});

export default BrandContainer;