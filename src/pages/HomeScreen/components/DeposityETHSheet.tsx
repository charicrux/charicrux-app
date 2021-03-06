import React, { useEffect, useRef } from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, Platform } from "react-native";
import { useSelector } from "react-redux";
import BottomSheet from "reanimated-bottom-sheet";
import BrandButton from "../../../components/BrandButton";
import { useTheme } from "../../../hooks/useTheme";
import { IRootReducer } from "../../../store/reducers";
import { getUserOrganization } from "../../../store/selectors/user.selectors";
import { Screens } from "../../Navigator/enums";
import PiggyBankSVG from "../../SVG/PiggyBankSVG";

const { width, height } = Dimensions.get("screen");

const DeposityETHSheet = ({ navigation, show, setShow } : any) => {
    const sheetRef = useRef<any | null>(null);
    const sheetHeight = useRef<number>(height - 200).current;
    const sheetHeightAndroid = useRef<number>(height - 100).current;
    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);

    const { theme: { background, text, grey }} = useTheme();

    useEffect(() => {
        if (show) sheetRef.current.snapTo(0);
    }, [ show ]);

    const handleSkip = () => sheetRef.current.snapTo(1);

    const handleSelectorBack = () => {
        setShow(false);
    };

    const handleDepositMethods = () => navigation.navigate(Screens.Wallet.DEPOSIT_METHODS);

    const renderMPSelector = () => {
        return (
            <View style={[styles.container, { backgroundColor: background, height: Platform.OS === 'ios' ? sheetHeight - 25 : sheetHeightAndroid - 125, marginTop: 15 }]}>
                <Text style={[ styles.header, { color: text }]}>Deposit Ethereum.</Text>
                <PiggyBankSVG width={Platform.OS === 'ios' ? width * 0.8 : width * 0.5} />
                <Text style={[ styles.text, { color: text }]}>Let's Deposit Some Ether to Buy Some { organization?.symbol }!</Text>
                <View style={styles.nextContainer}>
                    <BrandButton onPress={handleDepositMethods} type="gradient" title="Explore Deposit Methods"/>
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
            snapPoints={Platform.OS === 'ios' ? [sheetHeight, 0] : [sheetHeightAndroid, 0]} 
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