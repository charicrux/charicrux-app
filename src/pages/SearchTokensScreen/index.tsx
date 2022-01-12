import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View, Text} from "react-native";
import BrandSearchBar from "../../components/BrandSearchBar";
import { getTokensByQuery } from "../../graphql/queries/getTokensByQuery";
import { useTheme } from "../../hooks/useTheme";
import SearchSVG from "../SVG/SearchSVG";
import OrganizationItem from "../OrganizationsScreen/components/OrganizationItem";
import { Screens } from "../Navigator/enums";

const { width, height } = Dimensions.get("window");

const SearchTokensScreen = ({ navigation } : any) => {
    const [query, setSearchQuery ] = useState<string>("");
    const { theme } = useTheme();

    const { data, loading:_loading, error:_error } = useQuery(getTokensByQuery(), { 
        variables: { query }
    })

    const handleSelectOrganization = (item:any) => {
        navigation.navigate(Screens.Token.INFO, { organization:item }) 
    };

    const items = data ? data.getAggregatedOrganizations : [];

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: theme.background }]}>
            <View style={{ marginVertical: 25 }}>
                <SearchSVG width={width * 0.75}/>
            </View>
            <BrandSearchBar placeholder="Search Symbol, Organization, etc." setSearchQuery={setSearchQuery} />
            <ScrollView style={{ marginTop: 25 }}>
                {
                    items.map((item:any) => {
                        return <OrganizationItem handlePress={handleSelectOrganization} organization={item} key={item._id} />
                     })
                }
                {
                    !items.length && query ? (
                        <Text style={[{ color: theme.grey }]}>Try Searching Something Else.</Text> 
                    ) : null
                }
            </ScrollView>
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