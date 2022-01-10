import React, { useMemo } from "react";
import { View, Text, StyleSheet, Dimensions, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { formatPrice } from "../../utils/formatPrice";
import TimespanNavbar from "./components/TimespanNavbar";

interface CryptoGraphProps {
    balance: number; 
    header?: string,
    style?: StyleProp<ViewStyle>,
}

const CryptoGraph : React.FC<CryptoGraphProps> = ({ balance, header, style }) => {

    const balanceFormatted = useMemo(() => formatPrice(balance), [ balance ]);
    const { theme } = useTheme();

    return (
        <View style={[styles.container, style ]}>
            <View>
                <Text style={[ styles.header, { color: theme.text }]}>{ header || "Value" }</Text>
                <Text style={[ styles.balanceHeader, { color: theme.text }]}>${ balanceFormatted }</Text>
            </View>
            <TimespanNavbar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
    },
    header: {
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 5,
    },
    balanceHeader: {
        fontWeight: '600',
        fontSize: 25,
    }   
});

export default CryptoGraph;