import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
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

    const { data:tokenData, error:tokenError, loading } = useQuery<IAggregatedTokenResponse>(getAggregatedTokenQuery(), { 
        variables: { input: { organizationId: organization?._id }}
    })

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
    }
});

export default CryptoTokenScreen;