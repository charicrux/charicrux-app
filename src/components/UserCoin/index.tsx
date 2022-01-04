import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Text } from "react-native-svg";
import { useTheme } from "../../hooks/useTheme";
import EtherIconSVG from "../../pages/SVG/EtherIconSVG";
import BrandGradient from "../BrandGradient";

const UserCoin = () => {
    const { theme: { background }} = useTheme();

    return (
        <View>
            <BrandGradient style={[ styles.coinCircle, { borderColor: background }]}>
            {/* <Svg height="100" width="100">
                <Text
                    fill="none"
                    stroke={ background }
                    strokeWidth={4.5}
                    fontSize="70"
                    fontWeight="bold"
                    x="42.5"
                    y="65"
                    textAnchor="middle"
                >
                    { "S" }
                </Text>
            </Svg> */}
             <EtherIconSVG width={65} />
            </BrandGradient>
        </View>
    )
}   

const styles = StyleSheet.create({
    coinCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 7.5,
    }
})

export default UserCoin;