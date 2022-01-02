import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
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
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import { ILoginDTO, loginQuery } from "../../graphql/queries/login";
import { NavigationRouteContext } from '@react-navigation/native';
import { ILogin } from "./interfaces/login.interface";
import { useQuery } from '@apollo/client';

const { width, height } = Dimensions.get("screen");

const LoginScreen = ({navigation} : any) => {
    const { theme: { background, text } } = useTheme();
    const {loading, error, data} = useQuery(loginQuery);

    const [ formData, setFormData ] = useState<ILoginDTO>({});

    const handleCreateAccount = () => {
        navigation.navigate(Screens.Account.CREATE);
    }

    const handleLogin = () => {
        Keyboard.dismiss();
        
        if(!formData.email || !formData.pass) {return;}

        if(data.email == formData.email && data.pass == formData.pass) {
            navigation.navigate(Screens.Initial.LAUNCH);
        } else {
            navigation.navigate(Screens.Account.LOGIN);
        }
    }

    const updateFormData = (key:keyof ILoginDTO) => (e:string) => {
        setFormData({ ...formData, [ key]: e })
    };

    return (
        <SafeAreaView style={[styles.container]} >
            <View style={styles.displayRect}>
                <BrandTextInput 
                    placeholder="Email"
                    onChangeText={updateFormData('email')}
                />
                <BrandTextInput secureTextEntry={true}
                    placeholder = 'Password'
                    onChangeText={updateFormData('pass')}
                />
                <BrandButton onPress={handleLogin} style={{ marginTop: 50 }} type="gradient" title="Sign In" />
                <Text style={[styles.or]}>Or</Text>
                <View style={[styles.horizontalLineLeft]}/>
                <View style={[styles.horizontalLineRight]}/>
                <Text style={[styles.newAccount]} onPress={handleCreateAccount}>
                    Create a 
                    <Text> </Text>
                    <Text style={[styles.newAccount2]}>
                        New Account
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        display: 'flex',
        backgroundColor: '#202143'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 15,
        height: height - 75,
        flexDirection: "column",
    },
    displayRect: {
        display: 'flex',
        position: 'absolute',
        bottom: 100,
        alignItems: 'center',
        width: '95%',
        height: '60%',
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#16152F',
    },
    or: {
        display: 'flex',
        alignItems: 'center',
        width: '5%',
        color: '#8F8F8F',
        marginTop: 50,
    },
    horizontalLineLeft: {
        borderBottomWidth: 1,
        borderBottomColor: '#8F8F8F',
        width: '45%',
        display: 'flex',
        alignSelf: 'flex-start',
        marginTop: -10
    },
    horizontalLineRight: {
        borderBottomWidth: 1,
        borderBottomColor: '#8F8F8F',
        width: '45%',
        display: 'flex',
        alignSelf: 'flex-end',
    },
    newAccount: {
        marginTop: 50,
        color: '#8F8F8F',
        fontSize: 15,
    },
    newAccount2: {
        marginTop: 50,
        color: '#62F6FF',
        fontSize: 15,
    },
    input: {
        width: width * 0.75,
        height: 55,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginVertical: 5,
    }
});

export default LoginScreen;