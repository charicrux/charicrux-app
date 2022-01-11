import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import BottomSheet from "reanimated-bottom-sheet";
import CopyText from "../../../components/CopyText";
import { useSelector } from "react-redux";
import { IRootReducer } from "../../../store/reducers";
import { getUserWallet } from "../../../store/selectors/user.selectors";

const { width, height } = Dimensions.get("screen");

interface DepositMethodsSheetProps {
    navigation: any,
    show: boolean,
    setShow: (e:boolean) => void,
}

const DepositMethodsSheet : React.FC<DepositMethodsSheetProps> = ({ show, setShow }) => {

    const sheetRef = useRef<any | null>(null);
    const sheetHeight = useRef<number>(height * 0.5).current;
    const { theme: { background, text, grey  }, palette: { purple, red }} = useTheme();

    const state = useSelector((state:IRootReducer) => state);
    const wallet = getUserWallet(state);

    const handleSelectorBack = () => {
        sheetRef.current.snapTo(1);
        setShow(false);
    };

    useEffect(() => {
        sheetRef.current.snapTo(show ? 0 : 1);
    }, [ sheetRef, show ]);

    const renderMPSelector = () => {
 
        return (
            <View style={[styles.container, { backgroundColor: background, height: sheetHeight, marginTop: 35 }]}>
                <View style={styles.headerContainer}>
                    <Text style={[ styles.header, { color: text }]}>Methods</Text>
                    <TouchableOpacity onPress={() => setShow(false)}>
                        <Text style={[{ color: purple, fontSize: 15 }]}>Close</Text>
                    </TouchableOpacity>
                </View>
               <View>
                    <Text style={[ styles.label, { color: text }]}>1. Direct Deposit to Address</Text>
                    <CopyText copyText={wallet?.address}>
                        <Text style={[{ color: grey, fontSize: 15 }]}>{ wallet?.address }</Text>
                    </CopyText>
                    <Text style={[{ color: red, textAlign: 'center', marginTop: 5 }]}>Deposit Using Robsten Ethereum Only.</Text>
                    <View style={styles.moreContainer}>
                        <Text style={[{ color: grey }]}>Additional Methods Coming Soon!</Text>
                    </View>
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
        borderRadius: 25,
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection:'row',
        width: width,
        alignItems: 'center',
        paddingHorizontal: 25,
        marginBottom: 35,
    },
    header: {
        fontSize: 25,
        fontWeight: '600'
    },
    label: {
        marginLeft: 15,
        fontWeight: '600',
        fontSize: 15,
    },
    moreContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default DepositMethodsSheet;