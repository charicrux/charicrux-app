
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform  } from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandGradient from '../../components/BrandGradient';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import EtherIconSVG from '../SVG/EtherIconSVG';

const { width, height } = Dimensions.get("screen");

const LaunchScreen = ({ navigation } : any) => {
    const { theme: { background, text } } = useTheme();

    const handleCreateAccount = () => {
        navigation.navigate(Screens.Account.ORGANIZATIONS);
    };

    const handleLogin = () => {
        navigation.navigate(Screens.Account.LOGIN);
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
            <View style={styles.etherLogo}>
                <BrandGradient style={styles.etherCircle} />
                <Animated.View style={styles.etherContainer}>
                    <EtherIconSVG width={width * 0.7}/>
                </Animated.View>
            </View>
            <Text style={[ styles.header, { color: text } ]}>Begin Crypto Fundraising</Text>
            <BrandButton onPress={handleCreateAccount} type="gradient" title="Create an Account" />
            <BrandButton onPress={handleLogin} title="Login" style={{ marginTop: 15 }} />
            <View style={{ marginTop: Platform.OS === "ios" ? "auto" : 25 }}>
                <Text style={[ styles.notice ]}>
                    <Text onPress={() => {navigation.navigate(Screens.Fundraiser.VIEW)}}>shfkjsbdfkjsbdf</Text>
                    By continuing, you agree to Charicrux Technology's Terms of Service & Privacy Policy.
                </Text>
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
    etherLogo: {
        position: "relative",
        marginTop: 100, 
    },
    etherCircle: {
        borderRadius: width * 0.3,
        width: width * 0.6,
        height: width * 0.6,
    },
    etherContainer: {
        left: 0,
        top:0,
        position: "absolute",
        transform: [{ translateY: -width * 0.15 }, { translateX: -width * 0.1 * 0.5 }]
    },
    header: {
        marginVertical: Platform.OS === 'ios' ? 25 + (height * 0.05) : height * 0.05,
        fontWeight: "400",
        fontSize: 25,
    },
    buttonText: {
        fontWeight: "500",
        fontSize: 16,
    },  
    buttonContainer: {
        width: width * 0.75,
        height: 55,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    notice: {
        textAlign: 'center',
        color: "#797979",
        marginVertical: 15,
        width: width * 0.8,
    }
});

export default LaunchScreen;