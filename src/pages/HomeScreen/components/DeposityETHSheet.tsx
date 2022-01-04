import React, { useEffect, useRef } from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import BrandButton from "../../../components/BrandButton";
import { useTheme } from "../../../hooks/useTheme";
import PiggyBankSVG from "../../SVG/PiggyBankSVG";

const { width, height } = Dimensions.get("screen");

const DeposityETHSheet = () => {
    const sheetRef = useRef<any | null>(null);
    const sheetHeight = useRef<number>(height - 200).current;

    const { theme: { background, text, grey }} = useTheme();

    useEffect(() => {
        sheetRef.current.snapTo(0);
    }, []);

    const handleSkip = () => sheetRef.current.snapTo(1);

    const handleSelectorBack = () => {
        
    };

    const renderMPSelector = () => {
        return (
            <View style={[styles.container, { backgroundColor: background, height: sheetHeight - 25, marginTop: 15 }]}>
                <Text style={[ styles.header, { color: text }]}>Deposit ETH</Text>
                <PiggyBankSVG width={width * 0.75} />
                <Text style={[ styles.text, { color: text }]}>Let's Deposit Some Ether to Get Started.</Text>
                <View style={styles.nextContainer}>
                    <BrandButton type="gradient" title="Explore Deposit Methods"/>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={[ styles.skip, { color: grey }]}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        )
    }


    return (
        <BottomSheet 
            ref={sheetRef}
            initialSnap={1}
            snapPoints={[sheetHeight, 0]} 
            borderRadius={25}
            renderContent={renderMPSelector}
            onCloseEnd={handleSelectorBack}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { height: -5, width: 0 },
        shadowRadius: 5,
        zIndex: 1,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        marginVertical: 15,
    },
    header:{
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 15,
    },
    skip: {
        fontWeight: "600",
        marginVertical: 15,
    },
    nextContainer: {
        display: 'flex',
        alignItems: 'center',
    }
})

export default DeposityETHSheet;