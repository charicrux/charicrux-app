import { useLazyQuery } from "@apollo/client";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, RefreshControl, ScrollView, StyleSheet, View, Text, Platform, TouchableOpacity, Clipboard } from "react-native";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { apolloClient } from "../../../App";
import BrandButton from "../../components/BrandButton";
import CopyText from "../../components/CopyText";
import FadeIn from "../../components/FadeIn";
import { getWalletBalanceQuery } from "../../graphql/queries/getWalletBalance";
import { useTheme } from "../../hooks/useTheme";
import { IRootReducer } from "../../store/reducers";
import { getUserWallet } from "../../store/selectors/user.selectors";
import MoneySVG from "../SVG/MoneySVG";
import DepositMethodsSheet from "./components/DepositMethodsSheet";
// import Clipboard from "@react-native-community/clipboard";

const { width, height } = Dimensions.get("window");

const DepositMethodsScreen = ({ navigation } : any) => {
    const { theme } = useTheme();

    const [ fetchBalance ] = useLazyQuery(getWalletBalanceQuery());

    const state = useSelector((state:IRootReducer) => state);
    const wallet = getUserWallet(state);
    
    const walletBalanceCache = apolloClient.readQuery({ 
        query: getWalletBalanceQuery(),
    })

    const { getWalletBalance:walletBalance  } = walletBalanceCache ? walletBalanceCache : {} as any;

    const balance = useMemo(() => {
        if (!walletBalance) return "0.00"; 
        else return walletBalance?.toLocaleString("en",{
            useGrouping: false, 
            minimumFractionDigits: 2,
            maximumFractionDigits: 5
        }); 
    }, [ walletBalance ]);

    useEffect(() => {
        navigation?.setOptions({ 
            headerTitle: balance || balance === 0 ? `${balance} ETH` : "",
            headerStyle: { 
                backgroundColor: theme.background,
            }});
    }, [ balance ]);

    const [ loading, setLoading ] = useState(false);

    const onRefresh = () => {
        setLoading(true);
        fetchBalance().finally(() => setLoading(false));
    };

    const [ showMethods, setShowMethods ] = useState(false);

    const handleShowMethods = () => setShowMethods(true);

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            <ScrollView
                contentContainerStyle={ styles.scrollView }
                refreshControl={
                    <RefreshControl
                        tintColor="#fff"
                        titleColor="#fff"
                        refreshing={loading}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={{ width: width, paddingHorizontal: 15 }}>
                    <Text style={[styles.header, { color: theme.text }]}>Buying Power</Text>
                    <View style={styles.buyingPowerContainer}>
                        <FontAwesomeIcon size={25} color={theme.text} icon={faEthereum} />
                        <Text style={[ styles.buyingPower, { color: theme.text }]}>{ balance }</Text>
                    </View>
                </View>
                <MoneySVG width={width * 0.95} />
                <View>
                    <Text style={[ styles.label, { color: theme.text }]}>Wallet Address</Text>
                    <CopyText copyText={wallet?.address}>
                        <FadeIn show={!!wallet?.address}>
                            <Text numberOfLines={1} style={[{ color: theme.grey }]} >{ wallet?.address }</Text>
                        </FadeIn>
                    </CopyText>
                    {/* <Text style={[{ color: theme.grey, maxWidth: width * 0.9, paddingHorizontal: 5 }]}>
                        Deposit Ethereum by Transfering Crypto to the Wallet Address.
                    </Text> */}
                </View>
                
            </ScrollView>
            <BrandButton
                onPress={handleShowMethods}
                style={{ marginTop: Platform.OS === 'ios' ? 'auto' : 25, marginBottom: 50, }} 
                type="gradient" 
                title="Deposit" 
            />
             <DepositMethodsSheet setShow={setShowMethods} navigation={navigation} show={showMethods} />
        </SafeAreaView>
    )
}   

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height - 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    scrollView: {
        width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: height - 150,
    },
    header: {
        fontWeight:"600",
        fontSize:25,
        marginTop: 15,
    },
    label: {
        marginLeft: 15,
        fontWeight: '600',
        fontSize: 15,
    },
    walletAddressContainer: {
        width: width * 0.9,
        height: 55,
        marginVertical: 10,
        borderRadius: 5,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
    buyingPowerContainer: { 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        marginVertical: 10,
    },
    buyingPower: {
        marginHorizontal: 5,
        fontSize: 22.5,
        fontWeight: "600",
    },
    copyContainer: {
        width: 45,
        height:"100%",
        position: "absolute",
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: "#fff",
        // borderStyle: "solid",
    }
});

export default DepositMethodsScreen;