import { useMutation } from '@apollo/client';
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
    Button
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BrandContainer from '../../components/BrandContainer';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { createTokenMutation } from '../../graphql/mutations/createToken';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';

const { width, height } = Dimensions.get('screen');

const ViewFundraisersScreen = ({navigation}: any) => {
    const { theme: { background, text, grey } } = useTheme();

    return(
        <SafeAreaView style={[styles.container, {backgroundColor: background}]}>
            <BrandContainer header="Fundraisers">
                <View></View>
            </BrandContainer>
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

export default ViewFundraisersScreen;