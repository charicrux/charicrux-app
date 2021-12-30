import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    View, 
    Text, 
    Platform, 
    KeyboardAvoidingView, 
    Keyboard
} from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandTextInput from '../../components/BrandTextInput';
import { createUserMutation, ICreateUserDTO } from '../../graphql/mutations/createUser';
import { useTheme } from '../../hooks/useTheme';
import { emailPattern } from '../../utils/patterns';
import { Screens } from '../Navigator/enums';
import WalletSVG from '../SVG/WalletSVG';

const { width, height } = Dimensions.get("screen");

const CreateAccountScreen = ({navigation} : any) => {
    const [ formData, setFormData ] = useState<ICreateUserDTO>({});

    const [createUser, { data:_data, loading:_loading, error:_error }] = useMutation(createUserMutation(formData));
    const { theme: { background, text } } = useTheme();
    
    const handleLogin = () => {
        navigation.navigate(Screens.Account.LOGIN);
    }

    const updateFormData = (key:keyof ICreateUserDTO) => (e:string) => {
        setFormData({ ...formData, [ key]: e });
    };

    const handleCreateAccount = () => {
        Keyboard.dismiss();

        if (!formData.email || !emailPattern.test(formData?.email)) return
        else if (!formData.pass || formData?.pass?.length < 8) return;
        createUser().then(e => {
            console.log(e);
        }).catch(_ => {
            // Handle Create Account Error (Duplicate Email)
        }); 
    };  

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: background }]} >
            <KeyboardAvoidingView behavior={"position"}>
                <View style={styles.content}>
                    <View style={styles.wallet}>
                        <WalletSVG width={width * 0.65} />
                    </View>
                    <Text style={[ styles.header, { color: text } ]}>
                        Crypto Wallet
                    </Text>
                    <BrandTextInput 
                        onSubmitEditing={handleCreateAccount}
                        onChangeText={updateFormData('email')}
                        placeholder="example@gmail.com"
                    />
                    <BrandTextInput 
                        onSubmitEditing={handleCreateAccount}
                        onChangeText={updateFormData('pass')}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                    <BrandButton onPress={handleCreateAccount} style={{ marginTop: 25}} type="gradient" title="Mint Wallet" />
                    <View style={{ marginTop: Platform.OS === "ios" ? "auto" : 25 }}>
                        <Text onPress={handleLogin} style={[ styles.notice ]}>
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