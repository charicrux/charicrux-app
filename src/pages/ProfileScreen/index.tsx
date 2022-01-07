import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform  } from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandGradient from '../../components/BrandGradient';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import DefaultAvatar from '../SVG/DefaultAvatarSVG';

const { width, height } = Dimensions.get("screen");

const ProfileScreen = ({navigation}: any) => {
    
    const {theme: {background, text} } = useTheme();

    return (
        <SafeAreaView style={styles.container}>
            <DefaultAvatar width={width*0.75}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        display: 'flex',
    },
});

export default ProfileScreen;