import React from 'react';
import {
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    View, 
    Text, 
    Platform, 
    KeyboardAvoidingView 
} from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandTextInput from '../../components/BrandTextInput';
import { useTheme } from '../../hooks/useTheme';
import WalletSVG from '../SVG/WalletSVG';

const { width, height } = Dimensions.get("screen");

const CreateAccountScreen = () => {
    const { theme: { background, text } } = useTheme();
    
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: background }]} >
            <KeyboardAvoidingView behavior={"position"} >
                <View style={styles.content}>
                    <View style={styles.wallet}>
                        <WalletSVG width={width * 0.65} />
                    </View>
                    <Text style={[ styles.header, { color: text } ]}>
                        Crypto Wallet
                    </Text>
                    <BrandTextInput 
                        placeholder="example@gmail.com"
                    />
                    <BrandTextInput 
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <BrandButton style={{ marginTop: 25 }} type="gradient" title="Mint Wallet" />
                    <View style={{ marginTop: Platform.OS === "ios" ? "auto" : 25 }}>
                        <Text style={[ styles.notice ]}>
                            Already Have an Account? Login
                        </Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        display: 'flex',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 15,
        height: height - 75,
        flexDirection: "column",
    },
    wallet: {
        transform: [{ rotateZ: "-15deg" }],
        marginTop: height * 0.05,
    },
    header: {
        marginTop: 25 + (height * 0.05),
        marginBottom: 25,
        fontWeight: "400",
        fontSize: 25,
    },
    notice: {
        textAlign: 'center',
        color: "#797979",
        marginBottom: 15,
        width: width * 0.8,
    }
});

export default CreateAccountScreen;