import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Dimensions, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandContainer from '../../components/BrandContainer';
import BrandTextInput from '../../components/BrandTextInput';
import { createFundraiserMutation, ICreateFundraiserDTO } from '../../graphql/mutations/createFundraiser';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import HelpSVG from '../SVG/HelpSVG';

const { width, height } = Dimensions.get('screen');

const CreateFundraiserScreen = ({navigation}: any) => {
    const { theme: { background, text, secondary } } = useTheme();

    const [formData, setFormData] = useState<ICreateFundraiserDTO>({});

    const [createFundraiser, {data: _data, loading: _loading, error: _error}] = useMutation<any, {input: ICreateFundraiserDTO}>(createFundraiserMutation(), {
        variables: { input: {...formData}}
    });

    const updateFormData = (key:keyof ICreateFundraiserDTO) => (e:string | number) => {
        let value:number | string = e; 
        if (key === 'goal' && typeof e === 'string') value = parseFloat(e);
        setFormData({ ...formData, [ key]: value });
    };

    const handleCreate = () => {
        if (!formData.goal || !formData.name || !formData.purpose) return; 

        createFundraiser().catch(e => {
            console.log(e);
        }).finally(() => {
            navigation.navigate(Screens.TAB_NAVIGATOR.INITIAL);
        });
    };

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: secondary}]}>
            <KeyboardAvoidingView behavior='position'>
                <BrandContainer header='' style={[ styles.containerms, { backgroundColor: background }]}>
                    <>
                        <Text style={[styles.header, { color: text }]}>Create Fundraiser</Text>
                        {/* <DollarGraphSVG width={width * 0.6}/> */}
                        <HelpSVG width={width * 0.75}/>
                        <BrandTextInput 
                            placeholder="Name of Fundraiser" 
                            onChangeText={updateFormData('name')}
                        />
                        <BrandTextInput 
                            placeholder="Purpose" 
                            onChangeText={updateFormData('purpose')}
                        />
                        <BrandTextInput 
                            returnKeyType='done' 
                            keyboardType='decimal-pad'  
                            placeholder="Goal in Ethereum" 
                            onChangeText={updateFormData('goal')}
                        />
                        <View style={{ marginVertical: 35 }}>
                            <BrandButton 
                                loading={_loading}
                                onPress={handleCreate} 
                                type='gradient' 
                                title='Create'/>
                        </View>
                    </>
                </BrandContainer>       
            </KeyboardAvoidingView>  
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
        fontSize: 25,
        fontWeight: "600",
    }
});

export default CreateFundraiserScreen;