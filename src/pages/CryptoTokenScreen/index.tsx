import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import BrandButton from "../../components/BrandButton";
import BrandGradient from "../../components/BrandGradient";
import CryptoGraph from "../../components/CryptoGraph";
import { theme } from "../../constants/theme";
import { getAggregatedTokenQuery, IAggregatedTokenResponse } from "../../graphql/queries/getAggregatedToken";
import { useTheme } from "../../hooks/useTheme";
import { IRootReducer } from "../../store/reducers";
import { getUserOrganization } from "../../store/selectors/user.selectors";
import CreateTokenSheet from "./components/CreateTokenSheet";

const { width, height } = Dimensions.get("window");

const CryptoTokenScreen = ({ navigation } : any) => {
    const { theme } = useTheme();

    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);

    const { data:tokenData, error:tokenError, loading:_tokenLoading } = useQuery<{ getAggregatedToken: IAggregatedTokenResponse }>(getAggregatedTokenQuery(), { 
        variables: { input: { organizationId: organization?._id }}
    })

    const token:IAggregatedTokenResponse = tokenData ? tokenData.getAggregatedToken : {} as any;

    useEffect(() => {
        navigation?.setOptions({ 
            headerTitle:  "",// `${ organization?.symbol }`,
            headerStyle: { 
                backgroundColor: theme.background,
            }});
    }, [ theme ]);
    console.log(!!tokenData, tokenData)

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.headerContainer}>
                    <Text style={[ styles.symbol, { color: theme.text }]}>{ token.symbol } Token</Text>
                    <Text style={[ styles.name, { color: theme.text }]}>{ token.name }</Text>
                </View>
                <View style={[ styles.graph, { backgroundColor: theme.secondary }]}>
                    <CryptoGraph 
                        header={"Price"}
                        balance={0.00}
                    />
                </View>
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
            { !!tokenError && !tokenData ? 
                <CreateTokenSheet navigation={navigation} show={true} /> : null
            }
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
        position: 'absolute',
        justifyContent: "flex-end", 
        height: "100%",
    },
    scrollView: {
        width: width,
        minHeight: height,
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
    }
});

export default CryptoTokenScreen;