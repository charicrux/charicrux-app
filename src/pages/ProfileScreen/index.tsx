import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform, ScrollView  } from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import AvatarSVG from '../SVG/AvatarSVG';

const { width, height } = Dimensions.get('screen');

const ProfileScreen = ({navigation}: any) => {
    const { theme: { background, text } } = useTheme();

    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <AvatarSVG width={width*0.6}/>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height: height * 1.1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#16152F',
    },
});

export default ProfileScreen;