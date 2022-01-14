import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useMemo } from "react";
import { View, Text, StyleSheet, Dimensions, StyleProp, ViewStyle } from "react-native";
import Dash from "react-native-dash";
import { useSelector } from "react-redux";
import { useTheme } from "../../hooks/useTheme";
import { IRootReducer } from "../../store/reducers";
import { getAccessToken } from "../../store/selectors/auth.selectors";
import { formatPrice } from "../../utils/formatPrice";
import TimespanNavbar from "./components/TimespanNavbar";

interface CryptoGraphProps {
    balance: number; 
    header?: string,
    style?: StyleProp<ViewStyle>,
}

const { width } = Dimensions.get("window");

const CryptoGraph : React.FC<CryptoGraphProps> = ({ balance, header, style }) => {
    const balanceFormatted = useMemo(() => formatPrice(balance), [ balance ]);
    const { theme } = useTheme();

    return (
        <View style={[styles.container, style ]}>
            <View>
                <Text style={[ styles.header, { color: theme.text }]}>{ header || "Value" }</Text>
                <Text style={[ styles.balanceHeader, { color: theme.text }]}>
                    <FontAwesomeIcon style={{ marginRight: 5, }} color={theme.text} size={25} icon={faEthereum} />
                    {balanceFormatted}
                </Text>
            </View>
            <View style={styles.dashContainer}>
                <Dash 
                    style={{width: width * 0.8, height:1}} 
                    dashGap={5} 
                    dashLength={5}
                    dashThickness={1} 
                    dashColor={theme.text}
                />
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
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
    },
    dashContainer: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default CryptoGraph;