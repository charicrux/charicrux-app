import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import BrandContainer from "../../components/BrandContainer";
import { useTheme } from "../../hooks/useTheme";
import AlertsCarousel from "./components/AlertsCarousel";
import DeposityETHSheet from "./components/DeposityETHSheet";

const { width, height } = Dimensions.get("screen");

const HomeScreen = () => {
    const { theme: { background, text } } = useTheme();

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: background }]}>
           <ScrollView contentContainerStyle={styles.scrollView}>
                <BrandContainer header="Crypto Wallet" style={{ height: 350 }}>
                    <></>
                </BrandContainer>
                <TouchableOpacity style={styles.buyingPowerContainer}>
                    <Text style={[ styles.buyingPowerLabel, { color: text }]}>Buying Power</Text>
                    <View style={styles.buyingPowerAmountContainer}>
                        <Text style={[{ color: text, marginRight: 5 }]}>$0.00</Text>
                        <FontAwesomeIcon color={text} icon={faAngleRight} />
                    </View>
                </TouchableOpacity>
                <AlertsCarousel />
                <BrandContainer header="Foreign Portfolio" style={{ height: 350, marginTop: 15 }}>
                    <></>
                </BrandContainer>
           </ScrollView>
           <DeposityETHSheet />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
    },
    scrollView: {
        display: 'flex',
        minHeight: height,
        alignItems: 'center',
    },
    buyingPowerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width,  
        paddingHorizontal: width * 0.05,
        marginVertical: 15,
    },
    buyingPowerAmountContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    buyingPowerLabel: {
        fontWeight: "500",
    }
});

export default HomeScreen;