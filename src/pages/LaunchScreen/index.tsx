
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Button, Platform  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BrandGradient from '../../components/BrandGradient';
import { useTheme } from '../../hooks/useTheme';
import EtherIconSVG from '../SVG/EtherIconSVG';


const { width, height } = Dimensions.get("screen");

const LaunchScreen = () => {
    const { theme: { background, text, secondary } } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
            <View style={styles.etherLogo}>
                <BrandGradient style={styles.etherCircle} />
                <Animated.View style={styles.etherContainer}>
                    <EtherIconSVG width={width * 0.7}/>
                </Animated.View>
            </View>
            <Text style={[ styles.header, { color: text } ]}>Begin Crypto Fundraising</Text>
            <TouchableOpacity>
                <BrandGradient style={styles.buttonContainer}>
                    <Text style={[ styles.buttonText, { color: text }]}>Open an Account</Text>
                </BrandGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[ styles.buttonContainer, { marginTop: 15, backgroundColor: secondary } ]}>
                <Text style={[ styles.buttonText, { color: text }]}>Login</Text>
            </TouchableOpacity>
            <View style={{ marginTop: Platform.OS === "ios" ? "auto" : 25 }}>
                <Text style={[ styles.notice ]}>
                    By continueing, you agree to Charicrux Technology's Terms of Service & Privacy Policy.
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
        marginVertical: 25 + (height * 0.05),
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
        marginBottom: 15,
        width: width * 0.8,
    }
});

export default LaunchScreen;