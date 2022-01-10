import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
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

const { width, height } = Dimensions.get("window");

const CryptoTokenScreen = ({ navigation, route } : any) => {
    const { theme } = useTheme();


    const [ currentOrganizationId, setCurrentOrganizationId ] = useState<string | null>(null);

    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);

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

    useEffect(() => {
        navigation?.setOptions({ 
            headerTitle:  "",// `${ organization?.symbol }`,
            headerStyle: { 
                backgroundColor: theme.background,
            }});
    }, [ theme, navigation ]);

    const [ showCreateToken, setShowCreateToken  ] = useState(false);

    const handleShowCreateToken = useCallback(() => {
        setShowCreateToken(true);
    }, []);

    useEffect(() => { refetchToken()}, []);

    const [ alertItems, setAlertItems ] = useState<IAlertItem[]>([]);

    const injectItems = useCallback(() => {
        const newItems:IAlertItem[] = [];
        if (!tokenData && !_tokenLoading) {
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

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                { 
                    alertItems.length ? (
                        <View style={{ marginVertical:15, }}>
                            <AlertsCarousel items={alertItems}/>
                        </View>
                    ) : <></>
                }
                { tokenData && (
                    <View style={styles.headerContainer}>
                        <Text style={[ styles.symbol, { color: theme.text }]}>{ token.symbol } Token</Text>
                        <Text style={[ styles.name, { color: theme.text }]}>{ token.name }</Text>
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
                    token?.address && (
                        <View>
                            <Text style={[ styles.label, { color: theme.text }]}>Contract Address</Text>
                            <CopyText copyText={token?.address}>
                                <Text style={[{ color: theme.grey, fontSize: 13.5 }]}>{ token?.address} </Text>
                            </CopyText>
                        </View>
                    )
                }
            </ScrollView>
            <View style={[ styles.actionsContainer ]}>
                <View  style={[ styles.actions, { backgroundColor: theme.background }]}>
                    <TouchableOpacity style={[ styles.button, { backgroundColor: theme.secondary } ]}>
                        <Text style={[{ color: theme.text }]}>Sell</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ styles.button, { backgroundColor: theme.background } ]}>
                       <BrandGradient style={styles.button}>
                            <Text style={[{ color: theme.text }]}>Buy</Text>
                        </BrandGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <CreateTokenSheet setShow={handleSetShow} navigation={navigation} show={showCreateToken} />  
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

    },
    actionsContainer: {
        width: width,

    },
    scrollView: {
        width: width,
        minHeight: height - 165,
        height: height - 165,
        display: 'flex',
        alignItems: 'center',
    },
    actions: {
        width: width,
        height: 125,
        transform: [{ translateY: -50 }],
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 10,
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
        marginLeft: 25,
        marginTop: 15,
    }
});

export default CryptoTokenScreen;