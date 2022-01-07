import React, { useEffect } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../../constants/theme";
import { useTheme } from "../../hooks/useTheme";
import { IRootReducer } from "../../store/reducers";
import { getUserOrganization } from "../../store/selectors/user.selectors";
import CreateTokenSheet from "./components/CreateTokenSheet";

const { width, height } = Dimensions.get("window");

const CryptoTokenScreen = ({ navigation } : any) => {
    const { theme } = useTheme();

    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);

    useEffect(() => {
        navigation?.setOptions({ 
            headerTitle: `${ organization?.symbol }`,
            headerStyle: { 
                backgroundColor: theme.background,
            }});
    }, [ theme, organization ]);

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            <CreateTokenSheet />
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