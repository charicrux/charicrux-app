import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useCallback, useEffect, useMemo } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import BrandContainer from "../../components/BrandContainer";
import { useTheme } from "../../hooks/useTheme";
import { IRootReducer } from "../../store/reducers";
import { getUserOrganization } from "../../store/selectors/user.selectors";
import LockSVG from "../SVG/LockSVG";
import AlertsCarousel from "./components/AlertsCarousel";
import DeposityETHSheet from "./components/DeposityETHSheet";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { getWalletBalanceQuery } from "../../graphql/queries/getWalletBalance";
import { useQuery } from "@apollo/client";
import { getAccessToken } from "../../store/selectors/auth.selectors";

const { width, height } = Dimensions.get("screen");

const HomeScreen = () => {
    const { theme: { background, text, grey } } = useTheme();
    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);
    const accessToken = getAccessToken(state);

    const { data, refetch, error, loading } = useQuery(getWalletBalanceQuery());

    const refetchClientData = useCallback(() => {
        if (accessToken && error) refetch();
    }, [ accessToken ]);
    useEffect(refetchClientData, [ refetchClientData ]);

    const walletBalance = useMemo(() => {
        const balance = data?.getWalletBalance; 
        if (!balance && !!error?.clientErrors.length === false) return "0.00"; 
        else if (!balance && !!error?.clientErrors.length) return null; 
        else return balance?.toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2}); 
    }, [ data, error ]);

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: background }]}>
           <ScrollView contentContainerStyle={styles.scrollView}>
                <BrandContainer header="Crypto Wallet" style={{ height: 350 }}>
                    <></>
                </BrandContainer>
                <TouchableOpacity style={styles.buyingPowerContainer}>
                    <Text style={[ styles.buyingPowerLabel, { color: text }]}>Buying Power</Text>
                    <View style={styles.buyingPowerAmountContainer}>
                        <FontAwesomeIcon color={text} icon={faEthereum} />    
                        <Text style={[{ color: text, marginHorizontal: 5 }]}>
                            { walletBalance ?? "N/A" }
                        </Text>
                        <FontAwesomeIcon color={text} icon={faAngleRight} />
                    </View>
                </TouchableOpacity>
                <AlertsCarousel />
                <BrandContainer header="Foreign Portfolio" style={[{ marginTop: 15 }]}>
                   <View style={styles.foreignPortfolioContainer}>
                       <View style={[ styles.lockIconContainer, { marginTop: -50 }]}>
                            <LockSVG width={width * 0.30} />
                            <Text style={[styles.lockCaption, { color: grey }]}>Unlock by Investing in { organization?.symbol }.</Text>
                       </View>
                   </View>
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