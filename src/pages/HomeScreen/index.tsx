import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BrandContainer from "../../components/BrandContainer";
import { useTheme } from "../../hooks/useTheme";
import { IRootReducer } from "../../store/reducers";
import { getUserOrganization } from "../../store/selectors/user.selectors";
import LockSVG from "../SVG/LockSVG";
import AlertsCarousel, { IAlertItem } from "./components/AlertsCarousel";
import DeposityETHSheet from "./components/DeposityETHSheet";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { getWalletBalanceQuery } from "../../graphql/queries/getWalletBalance";
import { useQuery } from "@apollo/client";
import { getAccessToken } from "../../store/selectors/auth.selectors";
import { Screens } from "../Navigator/enums";
import { setUserBalance } from "../../store/actions/user.actions";
import CryptoGraph from "../../components/CryptoGraph";
import { formatPrice } from "../../utils/formatPrice";
import WalletAltSVG from "../SVG/WalletAltSVG";
import GraphSVG from "../SVG/GraphSVG";

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation } : any) => {
    const { theme: { background, text, grey } } = useTheme();
    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);
    const accessToken = getAccessToken(state);

    const { data:balanceResponse, refetch, error } = useQuery(getWalletBalanceQuery());

    const handleDepositMethods = () => {
        navigation.navigate(Screens.Wallet.DEPOSIT_METHODS);
    };

    const refetchClientData = useCallback(() => {
       if (accessToken && error) refetch();
    }, [ accessToken, error ]);
    useEffect(refetchClientData, [ refetchClientData ]);

    const walletBalance = useMemo(() => {
        const balance = balanceResponse?.getWalletBalance; 
        if (!balance && !!error?.clientErrors.length === false) return "0.00"; 
        else if (!balance && !!error?.clientErrors.length) return null; 
        else return formatPrice(balance);
    }, [ balanceResponse, error ]);

    const [ alertItems, setAlertItems ] = useState<IAlertItem[]>([]);

    const injectItems = useCallback(() => {
        const newItems:IAlertItem[] = [];
        newItems.push({
            title: "Beginners Guide.",
            description: `To start, invest in ${organization?.symbol}, your token. This will also enable you to unlock the foreign portfolio.`,
            button: {
                callback: () => { navigation.navigate(Screens.Token.INFO, { organization }) },
                title: `Buy ${organization?.symbol}`,
            },
            image: () => <GraphSVG width={85} />
        });
        if (!balanceResponse?.getWalletBalance) {
            newItems.push({
                title: "Deposit Ethereum.",
                description: `Wallet Balance Empty. Deposit Some Ether to Begin Your Crypto Fundraising Journey.`,
                button: {
                    callback: () => { navigation.navigate(Screens.Wallet.DEPOSIT_METHODS) },
                    title: `Explore Methods`,
                },
                image: () => <WalletAltSVG width={85} />
            });
        }
        setAlertItems(newItems);
    }, [ organization, walletBalance ]); 

    useEffect(injectItems, [ injectItems ]);

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: background }]}>
           <ScrollView contentContainerStyle={styles.scrollView}>
                <BrandContainer header="Crypto Wallet" style={{ height: 350 }}>
                    <CryptoGraph style={{ height: "87.5%"}} balance={0.00}/>
                </BrandContainer>
                <TouchableOpacity onPress={handleDepositMethods} style={styles.buyingPowerContainer}>
                    <Text style={[ styles.buyingPowerLabel, { color: text }]}>Buying Power</Text>
                    <View style={styles.buyingPowerAmountContainer}>
                        <FontAwesomeIcon color={text} icon={faEthereum} />    
                        <Text style={[{ color: text, marginHorizontal: 5 }]}>
                            { walletBalance ?? "N/A" }
                        </Text>
                        <FontAwesomeIcon color={text} icon={faAngleRight} />
                    </View>
                </TouchableOpacity>
                <AlertsCarousel items={alertItems} navigation={navigation} />
                <BrandContainer header="Foreign Portfolio" style={[{ marginTop: 15 }]}>
                   <View style={styles.foreignPortfolioContainer}>
                       <View style={[ styles.lockIconContainer, { marginTop: -50 }]}>
                            <LockSVG width={width * 0.30} />
                            <Text style={[styles.lockCaption, { color: grey }]}>Unlock by Investing in { organization?.symbol }.</Text>
                       </View>
                   </View>
                </BrandContainer>
           </ScrollView>
           <DeposityETHSheet navigation={navigation} />
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
        paddingBottom: 100,
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
    },
    foreignPortfolioContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 300,
        width: "100%",
    },
    lockIconContainer: {
        display: 'flex',
        alignItems:'center',
    },
    lockCaption: {
        marginTop: 10,

    }
});

export default HomeScreen;