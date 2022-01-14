import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BrandContainer from "../../components/BrandContainer";
import { useTheme } from "../../hooks/useTheme";
import { IRootReducer } from "../../store/reducers";
import { getUser, getUserOrganization } from "../../store/selectors/user.selectors";
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
import { getAggregatedPositionsQuery } from "../../graphql/queries/getPositions";
import ArticlesSVG from "../SVG/ArticlesSVG";
import { TabNavigatorScreens } from "../TabNavigator/enums";
import { IOrganization } from "../OrganizationsScreen/interfaces/organization.interface";

const { width, height } = Dimensions.get("screen");

const HomeScreen = ({ navigation } : any) => {
    const { theme: { background, text, grey } } = useTheme();
    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);
    const accessToken = getAccessToken(state);
    const user = getUser(state);

    const { data:balanceResponse, refetch, error } = useQuery(getWalletBalanceQuery());
    const { data:positionsResponse, refetch:refetchPoisitions, error:positionsError } = useQuery(getAggregatedPositionsQuery(), {
        variables: { userId: user?._id }
    })

    const handleDepositMethods = () => {
        navigation.navigate(Screens.Wallet.DEPOSIT_METHODS);
    };

    const refetchClientData = useCallback(() => {
       if (accessToken && error) refetch();
    }, [ accessToken, error ]);
    useEffect(refetchClientData, [ refetchClientData ]);


    useEffect(() => {
        refetchPoisitions();
    }, []);

    const positions = positionsResponse ? positionsResponse?.getTokenPositions : []

    const hasOrganizationToken = useMemo(() => {
        for (let position of positions) {
            if (position?.organization?._id === organization?._id) return true; 
        }
        return false; 
    }, [ positions ]);

    const primaryPosition = useMemo(() => {
        for (let position of positions) {
            if (position?.organization?._id === organization?._id) return position;
        }
        return null;
    }, [ positions ]);

    const filteredPositions = useMemo(() => {
        return positions.filter((position:any) => position.organization._id !== organization?._id);
    }, [ positions ]);

    const walletBalance = useMemo(() => {
        const balance = balanceResponse?.getWalletBalance; 
        if (!balance && !!error?.clientErrors.length === false) return "0.00"; 
        else if (!balance && !!error?.clientErrors.length) return null; 
        else return formatPrice(balance);
    }, [ balanceResponse, error ]);

    const [ alertItems, setAlertItems ] = useState<IAlertItem[]>([]);

    const injectItems = useCallback(() => {
        const newItems:IAlertItem[] = [];
       
        if (!hasOrganizationToken) {
            newItems.push({
                title: "Beginners Guide.",
                description: `To start, invest in ${organization?.symbol}, your token. This will also enable you to unlock the foreign portfolio.`,
                button: {
                    callback: () => { navigation.navigate(Screens.Token.INFO, { organization }) },
                    title: `Buy ${organization?.symbol}`,
                },
                image: () => <GraphSVG width={85} />
            });
        }
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
        newItems.push({
            title: "Beta Release!",
            description: `Charicrux is running on Robsten Testnet. Please keep in mind to deposit Ethereum only from a Robsten Facuet.`,
            image: () => <GraphSVG width={85} />
        });
        setAlertItems(newItems);
    }, [ organization, walletBalance, hasOrganizationToken ]); 

    useEffect(injectItems, [ injectItems ]);
    
    const handleSearchPage = () => {
        navigation.navigate(TabNavigatorScreens.SEARCH_TOKENS);
    };

    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        refetchClientData();
    }, []);

    const onRefresh = () => {
        setLoading(true);
        refetchClientData();
        refetchPoisitions().finally(() => {
            setLoading(false);
        });
    }; 

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            refetchClientData();
            refetchPoisitions();
        });
        return unsubscribe;
    }, [navigation]);

    const [ showDepositScreen, setShowDepositScreen ] = useState(false);

    useEffect(() => {
        if ( balanceResponse && parseFloat(walletBalance || "") == 0) {
            setShowDepositScreen(true);
        }
    }, [ balanceResponse ]);

    const handleNavigateToOrganization = (organization:IOrganization) => {
        navigation.navigate(Screens.Token.INFO, { organization });
    };
    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: background }]}>
           <ScrollView 
                refreshControl={(
                    <RefreshControl
                        tintColor="#fff"
                        titleColor="#fff"
                        refreshing={loading}
                        onRefresh={onRefresh}
                    />
                )}
                contentContainerStyle={styles.scrollView}>
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
                { !!primaryPosition && (
                    <TouchableOpacity onPress={() => handleNavigateToOrganization(primaryPosition?.organization)}>
                        <BrandContainer style={{ marginTop: 15, minHeight: 125 }} header={"Primary Organization"}
                            >
                            <View style={[styles.primaryOrgContainer, { backgroundColor: background }]}>
                                <View>
                                    <Text style={[{ color: text, marginBottom: 5, fontWeight: "600" }]}>{ primaryPosition?.organization?.name }</Text>
                                    <Text style={[{ color: text, fontWeight: "600" }]}>{ primaryPosition?.organization?.symbol } Token</Text>
                                </View>
                                <View>
                                    <Text style={[{ color: grey }]}>View</Text>
                                </View>
                            </View>
                        </BrandContainer>
                    </TouchableOpacity>
                )}
                <BrandContainer header="Foreign Portfolio" style={[{ marginTop: 15 }]}>
                   <View style={[styles.foreignPortfolioContainer, filteredPositions?.length ? { justifyContent: "flex-start", marginTop: 15, minHeight: 0, paddingBottom: 25} : {}]}>
                       { !hasOrganizationToken && !filteredPositions.length ? (
                           <View style={[ styles.lockIconContainer, { marginTop: -50 }]}>
                                <LockSVG width={width * 0.30} />
                                <Text style={[styles.lockCaption, { color: grey }]}>Unlock by Investing in { organization?.symbol }.</Text>
                            </View>
                       ) : null }
                       {
                           !filteredPositions.length && hasOrganizationToken ? (
                            <View>
                                <ArticlesSVG width={width * 0.75} hieght={width * 0.375} />
                                <TouchableOpacity onPress={handleSearchPage} style={styles.exploreContainer}>
                                    <Text style={[{ color: text, fontWeight: '600' }]}>Explore Foreign Tokens</Text>
                                </TouchableOpacity>
                            </View>
                           ) : null
                       }
                       {
                           (filteredPositions || [])?.map((position:any) => (
                                <TouchableOpacity 
                                    onPress={() => handleNavigateToOrganization(position?.organization)}
                                    key={position?._id} 
                                    style={[styles.primaryOrgContainer, { backgroundColor: background }]}>
                                    <View>
                                        <Text style={[{ color: text, marginBottom: 5, fontWeight: "600" }]}>{ position?.organization?.name }</Text>
                                        <Text style={[{ color: text, fontWeight: "600" }]}>{ position?.organization?.symbol } Token</Text>
                                    </View>
                                    <View>
                                        <Text style={[{ color: grey }]}>View</Text>
                                    </View>
                                </TouchableOpacity>
                           ))
                       }
                   </View>
                </BrandContainer>
           </ScrollView>
           <DeposityETHSheet setShow={(e:boolean) => setShowDepositScreen(e)} show={showDepositScreen} navigation={navigation} />
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
    primaryOrgContainer: {
        width: "90%",
        minHeight: 65,
        paddingHorizontal: 25,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        justifyContent: 'space-between',
    },
    lockIconContainer: {
        display: 'flex',
        alignItems:'center',
    },
    lockCaption: {
        marginTop: 10,

    },
    exploreContainer: {
        display: 'flex',
        alignItems: 'center',
        marginVertical: 10,
    }
});

export default HomeScreen;