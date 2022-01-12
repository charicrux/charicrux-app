import { useMutation, useQuery } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { create } from 'lodash';
import React, { useState } from 'react';
import {
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    View, 
    Text, 
    Platform, 
    KeyboardAvoidingView, 
    Button,
    ScrollView
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BrandButton from '../../components/BrandButton';
import BrandContainer from '../../components/BrandContainer';
import BrandGradient from '../../components/BrandGradient';
import BrandSearchBar from '../../components/BrandSearchBar';
import BrandTextInput from '../../components/BrandTextInput';
import { createTokenMutation } from '../../graphql/mutations/createToken';
import { getFundraisersQuery } from '../../graphql/queries/getFundraisers';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import FundraiserItem from './components/fundraiserItem';
import { IFundraiser } from './interfaces/fundraiser.interface';

const { width, height } = Dimensions.get('screen');

const FundraisersScreen = ({navigation}: any) => {
    const { theme: { background, text, grey } } = useTheme();

    const [ searchQuery, setSearchQuery ] = useState<string>("");
    const { data: { getFundraisers:fundraisers = [] as IFundraiser[] } = {} } = useQuery(getFundraisersQuery(), {
        variables: { query: searchQuery }
    });

    const handleCreatePress = () => {
        navigation.navigate(Screens.Fundraiser.CREATE);
    }

    const handleDonation = () => {

    }

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: background}]}>
            <View style={{marginTop: height * 0.04}}>
                <BrandSearchBar 
                    setSearchQuery={setSearchQuery}
                    placeholder="Search Local & Foreign Fundraisers"
                />
            </View>
            <BrandContainer header="Fundraisers" style={{height: height * 0.6, marginTop: 30, borderRadius: 5}}>
                <ScrollView>
                <View style={{ marginTop: 30 }}>
                {
                    fundraisers?.map(({ _id, ...fundraiser } : IFundraiser) => {
                        return (
                            <FundraiserItem 
                                key={_id} 
                                handlePress={handleDonation}
                                fundraiser={{ _id, ...fundraiser }} 
                            />
                        )
                    })   
                }
            </View>
                </ScrollView>
            </BrandContainer>
            <View style={{position: 'absolute', bottom: 25}}>
                <BrandButton type='gradient' title='Create a Fundraiser' onPress={handleCreatePress}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        display: 'flex',
        alignItems: 'center',
    },
});

export default FundraisersScreen;