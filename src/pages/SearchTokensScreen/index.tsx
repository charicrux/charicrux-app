import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import BrandSearchBar from "../../components/BrandSearchBar";
import { useTheme } from "../../hooks/useTheme";

const { width, height } = Dimensions.get("window");

const SearchTokensScreen = () => {
    const [query, setSearchQuery ] = useState<string>("");
    const { theme } = useTheme();

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            <BrandSearchBar placeholder="Search Symbol, Organization, etc." setSearchQuery={setSearchQuery} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        display: "flex",
        alignItems: 'center',
        padding: 10,
    }
});

export default SearchTokensScreen;