import { useMutation } from '@apollo/client';
import React, { useMemo, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform, ScrollView  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BrandButton from '../../components/BrandButton';
import BrandContainer from '../../components/BrandContainer';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { createFundraiserMutation, ICreateFundraiserDTO } from '../../graphql/mutations/createFundraiser';
import { ILoginDTO, loginClientMutation } from '../../graphql/mutations/login';
import { getWalletBalanceQuery } from '../../graphql/queries/getWalletBalance';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import DollarGraphSVG from '../SVG/DollarGraphSVG';

const { width, height } = Dimensions.get('screen');

const CreateFundraiserScreen = ({navigation}: any) => {
    const { theme: { background, text, grey, secondary } } = useTheme();

    const [formData, setFormData] = useState<ICreateFundraiserDTO>({});

    const [createFundraiser, {data: _data, loading: _loading, error: _error}] = useMutation<unknown, {input: ICreateFundraiserDTO}>(createFundraiserMutation(), {
        variables: { input: {...formData}}
    });

    const updateFormData = (key:keyof ICreateFundraiserDTO) => (e:string) => {
        const raised: number = 0;
        setFormData({ ...formData, [ key]: e });
        setFormData({raised, [key]: 'raised'})
    };

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: secondary}]}>
            <View style={[ styles.containerms, { backgroundColor: background }]}>
            <View style={[styles.headerContainer, { backgroundColor: secondary }]}>
                <Text style={[styles.header, { color: text }]}>Create Fundraiser</Text>
            </View>
            <DollarGraphSVG width={width * 0.6}/>
            <BrandTextInput placeholder="Name of Fundraiser" onChangeText={updateFormData('name')}/>
            <BrandTextInput style={{marginTop: 15}} placeholder="Goal in Dollars" onChangeText={updateFormData('goal')}/>
            <BrandButton style={{marginVertical: 50}} type='gradient' title='Create Fundraiser'/>
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
    containerms: {
        height: height * 0.8,
        width: width * 0.9, 
        alignItems: 'center',   
        marginTop: 50,
        borderRadius: 20,
    },
    headerContainer: {
        minWidth: 125,
        width: width * 0.35,
        maxWidth: 250,
        paddingVertical: 7.5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        marginBottom: 10,
    },
    header: {
        fontSize: 12,
        fontWeight: "500",
    }
});

export default CreateFundraiserScreen;