import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity, RefreshControl } from "react-native";
import { useSelector } from "react-redux";
import BrandGradient from "../../components/BrandGradient";
import CryptoGraph from "../../components/CryptoGraph";
import { getAggregatedTokenQuery, IAggregatedTokenResponse } from "../../graphql/queries/getAggregatedToken";
import { useTheme } from "../../hooks/useTheme";
import { IRootReducer } from "../../store/reducers";
import { getUserOrganization } from "../../store/selectors/user.selectors";
import CreateTokenSheet from "./components/CreateTokenSheet";
import { useLazyQuery, useQuery } from "@apollo/client";
import AlertsCarousel, { IAlertItem } from "../HomeScreen/components/AlertsCarousel";
import FireworksSVG from "../SVG/FireworksSVG";
import CopyText from "../../components/CopyText";
import { apolloClient } from "../../../App";
import { getWalletBalanceQuery } from "../../graphql/queries/getWalletBalance";
import FadeIn from "../../components/FadeIn";
import BuyTokenSheet from "./components/BuyTokenSheet";
import { getTokenBalanceQuery } from "../../graphql/queries/getTokenBalance";
import { formatPrice } from "../../utils/formatPrice";
import { getTokenStatsQuery } from "../../graphql/queries/getTokenStats";

const { width, height } = Dimensions.get("window");

const CryptoTokenScreen = ({ navigation, route } : any) => {
    const { theme, palette } = useTheme();

    const [ currentOrganizationId, setCurrentOrganizationId ] = useState<string | null>(null);

    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);
    const walletBalanceCache = apolloClient.readQuery({ 
        query: getWalletBalanceQuery(),
    })

    const { getWalletBalance:walletBalance  } = walletBalanceCache ? walletBalanceCache : {} as any;


    const [ loadOrganization, { data:tokenData, error:_tokenError, loading:_tokenLoading, refetch:refetchToken }] = useLazyQuery<{ getAggregatedToken: IAggregatedTokenResponse }>(getAggregatedTokenQuery(), { 
        variables: { input: { organizationId: currentOrganizationId }}
    })

    useEffect(() => {
        if (currentOrganizationId) loadOrganization();
    }, [ currentOrganizationId ]);

    useEffect(() => {
        if (route?.params?.organization) setCurrentOrganizationId(route?.params?.organization?._id);
    }, [ route ]);

    const token:IAggregatedTokenResponse = tokenData ? tokenData.getAggregatedToken : {} as any;


    const { data:tokenBalanceResponse, refetch:refetchTokenBalance } = useQuery(getTokenBalanceQuery(), { 
        fetchPolicy: "cache-first",
        variables: { tokenId: token?._id }
    });



    const clientBalance = tokenBalanceResponse ? tokenBalanceResponse?.getClientBalance : {};

    useEffect(() => {
        navigation?.setOptions({ 
            headerTitle:  "",// `${ organization?.symbol }`,
            headerStyle: { 
                backgroundColor: theme.background,
            }});
    }, [ theme, navigation ]);

    const [ showCreateToken, setShowCreateToken  ] = useState(false);
    const [ showBuyToken, setShowBuyToken ] = useState(false);

    const handleShowCreateToken = useCallback(() => {
        setShowCreateToken(true);
    }, []);

    useEffect(() => { 
        refetchToken();
        refetchTokenBalance();
    }, []);

    const [ alertItems, setAlertItems ] = useState<IAlertItem[]>([]);

    const injectItems = useCallback(() => {
        const newItems:IAlertItem[] = [];
        if (!tokenData?.getAggregatedToken && !_tokenLoading) {
            newItems.push({
                title: "Token Doesn't Exist Yet.",
                description: `Be the one to create the token and start this organization and your journey.`,
                button: {
                    callback: () => { setShowCreateToken(true) },
                    title: `Create ${organization?.symbol}`,
                },
                image: () => <FireworksSVG width={width * 0.25} />
            });
            setAlertItems(newItems);
        }
        setAlertItems(newItems);
    }, [ tokenData, _tokenLoading ]); 

    useEffect(injectItems, [ injectItems ]);

    const handleSetShow = (e:boolean) => {
        refetchToken();
        setShowCreateToken(e);
    }
    const handleSetBuyToken = () => {
        setShowBuyToken(!showBuyToken);
    };

    const handleSetBuyTokenShow = (e:boolean) => {
        if (!e) { 
            refetchTokenBalance();
            refetchToken();
        }
        setShowBuyToken(e);
    };

    const [ loading, setLoading ] = useState(false);
    const onRefresh = () => {
        setLoading(true);
        refetchTokenBalance();
        refetchToken().catch((e) => { console.log(e) }).finally(() => {
            setLoading(false);
        });
    };   

    const balance = useMemo(() => {
        if (!clientBalance || !clientBalance?.balance) return null; 
        else return formatPrice(clientBalance?.balance || 0);
    }, [ clientBalance ]);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onRefresh();
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            <ScrollView 
                style={{ maxHeight: height - 165}}
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        tintColor="#fff"
                        titleColor="#fff"
                        refreshing={loading}
                        onRefresh={onRefresh}
                    />
                }>
               
                { tokenData?.getAggregatedToken && (
                    <View style={styles.headerContainer}>
                        <Text style={[ styles.symbol, { color: theme.text }]}>{ token?.symbol } Token</Text>
                        <Text style={[ styles.name, { color: theme.text }]}>{ token?.name }</Text>
                    </View>
                )}
                <View style={[ styles.graph, { backgroundColor: theme.secondary }]}>
                    <CryptoGraph 
                        style={{ padding: 20,}}
                        header={"Price"}
                        balance={0.00}
                    />
                </View>
                { 
                    alertItems.length ? (
                        <FadeIn show={!!alertItems?.length} style={{ marginVertical:15, }}>
                            <AlertsCarousel items={alertItems}/>
                        </FadeIn>
                    ) : <></>
                }
                
                {
                    balance ? (
                        <View style={styles.sectionContainer}>
                            <Text style={[ styles.name, { color: theme.text }]}>Balance</Text>
                            <View style={styles.balanceRowContainer}>
                                <Text style={{ color: theme.grey }}>{ token?.symbol} Tokens</Text>
                                <Text style={{ color: theme.grey }}>{ balance }</Text>
                            </View>
                        </View>
                    ) : null
                }
               {
                token?.description && (
                    <View style={styles.sectionContainer}>
                        <Text style={[ styles.name, { color: theme.text, marginBottom: 10, }]}>About</Text>
                        <Text style={{ color: theme.grey }}>{ token?.description }</Text>
                    </View>
                   )    
               }
                { 
                    token?.address && (
                        <View style={styles.sectionContainer}>
                               <Text style={[ styles.name, { color: theme.text, marginBottom: 10, }]}>Contract</Text>
                            <Text style={[ styles.label, { color: theme.text }]}>Address</Text>
                            <CopyText style={{ marginLeft: -15 }} copyText={token?.address}>
                                <Text style={[{ color: theme.grey, fontSize: 13.5 }]}>{ token?.address} </Text>
                            </CopyText>
                        </View>
                    )
                }
            </ScrollView>
            <View style={[ styles.actionsContainer ]}>
        
                <View  style={[ styles.actions, { backgroundColor: theme.background }]}>
                { !walletBalance ? <Text style={{ color: theme.grey, marginBottom: 10 }}>Deposit Ethereum to Buy / Sell.</Text> : null}
                   <View style={{ display: 'flex', flexDirection: 'row'}}>
                    <TouchableOpacity disabled={!walletBalance} style={[ styles.button, { backgroundColor: theme.secondary } ]}>
                            <Text style={[{ color: theme.text }]}>Sell</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSetBuyToken} disabled={!walletBalance} style={[ styles.button, { backgroundColor: theme.background } ]}>
                        <BrandGradient style={styles.button}>
                                <Text style={[{ color: theme.text }]}>Buy</Text>
                            </BrandGradient>
                        </TouchableOpacity>
                   </View>
                </View>
            </View>

            <CreateTokenSheet setShow={handleSetShow} navigation={navigation} show={showCreateToken} /> 
            <BuyTokenSheet token={token} setShow={handleSetBuyTokenShow} navigation={navigation} show={showBuyToken} /> 
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
    headerContainer: {
        padding: 15,
        marginVertical: 10,
        width: width * 0.9,
    },
    sectionContainer: {
        padding: 15,
        marginTop: 10,
        width: width * 0.9,
    },
    symbol: {
        fontWeight: '500',
        marginVertical: 5,
        fontSize: 15,
  
    },
    name: {
        fontWeight: "600",
        fontSize: 25,
    },
    graph: {
        width: width * 0.9,
        borderRadius: 5,
        height: width * 0.9,
        marginTop: 20,

    },
    actionsContainer: {
        width: width,
    },
    scrollView: {
        width: width,
        minHeight: height - 165,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 100,
    },
    actions: {
        width: width,
        height: 125,
        transform: [{ translateY: -75 }],
        display: 'flex',
        justifyContent: "center",
        paddingVertical: 10,
        alignItems: 'center',
    },
    button: {
        width: width * 0.45,
        maxWidth: 250,
        height: 50,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginHorizontal: 5,
    },
    label: {
        fontWeight: '500',
        marginLeft: 15,
        marginTop: 15,
    },
    balanceRowContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 10,
    }
});

export default CryptoTokenScreen;