import React, { useState } from 'react';
import {
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    View, 
    ScrollView,
    Text,
    RefreshControl
} from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandContainer from '../../components/BrandContainer';
import BrandSearchBar from '../../components/BrandSearchBar';
import { getFundraisersQuery } from '../../graphql/queries/getFundraisers';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import FundraiserItem from './components/FundraiserItem';
import { useQuery } from '@apollo/client';
import { IFundraiser } from './interfaces/fundraiser.interface';

const { width, height } = Dimensions.get('screen');

const FundraisersScreen = ({navigation}: any) => {
    const { theme: { background, grey } } = useTheme();

    const [ searchQuery, setSearchQuery ] = useState<string>("");
    const { data, loading, refetch } = useQuery(getFundraisersQuery(), {
        variables: { query: searchQuery }
    });

    const handleCreatePress = () => {
        navigation.navigate(Screens.Fundraiser.CREATE);
    }

    const handleDonation = () => {}
    const onRefresh = () => { refetch() };
    
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onRefresh();
        });
        return unsubscribe;
    }, [navigation]);

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: background}]}>
            <View style={{marginTop: height * 0.04}}>
                <BrandSearchBar 
                    setSearchQuery={setSearchQuery}
                    placeholder="Search Local & Foreign Fundraisers"
                />
            </View>
            <BrandContainer header="Fundraisers" style={{height: height * 0.575, marginTop: 30, borderRadius: 5, minHeight: 350,}}>
                <ScrollView refreshControl={
                    <RefreshControl
                        tintColor="#fff"
                        titleColor="#fff"
                        refreshing={loading}
                        onRefresh={onRefresh}
                    />
                }
                    horizontal={false}
                    contentContainerStyle={{ 
                        width: width * 0.9, 
                        minHeight: height  * 0.575, 
                        display: 'flex',
                        alignItems: 'center',
                    }}    
                >
                    <View style={{ marginTop: 30 }}>
                        {
                            data?.getFundraiserByQuery?.map(({ _id, ...fundraiser } : IFundraiser) => {
                                return (
                                    <FundraiserItem 
                                        key={_id} 
                                        handlePress={handleDonation}
                                        fundraiser={{ _id, ...fundraiser }} 
                                    />
                                )
                            })   
                        }
                        {
                           !data?.getFundraiserByQuery?.length && searchQuery ? (
                               <Text style={[{ color: grey }]}>Try Searching Something Else.</Text>
                           ) : null
                        }
                    </View>
                </ScrollView>
            </BrandContainer>
            <View style={{ marginTop: 25 }}>
                <BrandButton type='gradient' title='Create a Fundraiser' onPress={handleCreatePress}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height:height,
        display: 'flex',
        alignItems: 'center',
    },
});

export default FundraisersScreen;