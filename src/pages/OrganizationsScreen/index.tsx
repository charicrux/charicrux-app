import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BrandSearchBar from "../../components/BrandSearchBar";
import { getOrganizationsQuery } from "../../graphql/queries/getOrganizations";
import { useTheme } from "../../hooks/useTheme";
import { Screens } from "../Navigator/enums";
import BuildingsSVG from "../SVG/BuildingsSVG";
import OrganizationItem from "./components/OrganizationItem";
import { IOrganization } from "./interfaces/organization.interface";

const { width, height } = Dimensions.get('screen');

interface OrganizationScreenProps {
    navigation: any,
}

const OrganizationScreen : React.FC<OrganizationScreenProps> = ({ navigation }) => {
    const { theme: { background, grey, text } } = useTheme();
    const [ searchQuery, setSearchQuery ] = useState<string>("");
    const { data: { getOrganizations:organizations = [] as IOrganization[] } = {} } = useQuery(getOrganizationsQuery(), {
        variables: { query: searchQuery }
    });

    const handleOrganizationPress = (_:IOrganization) => {
        navigation.navigate(Screens.Account.CREATE);
    };

    return (
        <SafeAreaView style={[ styles.container, { backgroundColor: background }]}>
            <BuildingsSVG width={width * 0.5} />
            <Text style={[ styles.header, { color: text }]}>Select your District or Organization</Text>
            <View>
                <BrandSearchBar 
                    setSearchQuery={setSearchQuery}
                    placeholder="Search School District, Organization, etc."
                />
            </View>
            <View style={{ marginTop: 30 }}>
                {
                    organizations?.map(({ _id, ...organization } : IOrganization) => {
                        return (
                            <OrganizationItem 
                                key={_id} 
                                handlePress={handleOrganizationPress}
                                organization={{ _id, ...organization }} 
                            />
                        )
                    })   
                }
            </View>
            <View style={{ marginTop: 25 }}>
                <TouchableOpacity>
                    <Text style={[ styles.notice, { color: grey }]}>
                        Don't See your Organization?
                    </Text>
                </TouchableOpacity>
            </View>
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
    header: {
        marginBottom: 15
    },
    notice: {
        marginBottom: 25,
    }
});

export default OrganizationScreen;