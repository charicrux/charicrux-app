import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Transition } from 'react-transition-group';
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
import { Screens } from '../Navigator/enums';
import { NavigationRouteContext } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");

const LoginScreen = ({navigation} : any) => {
    const { theme: { background, text } } = useTheme();

    const handleCreateAccount = () => {
        navigation.navigate(Screens.Account.CREATE);
    }

    return (
        <SafeAreaView style={[styles.container]} >
            <View style={styles.displayRect}>
                <BrandTextInput 
                    placeholder="Email"
                />
                <BrandTextInput secureTextEntry={true}
                    placeholder = 'Password'
                />
                <BrandButton style={{ marginTop: 50 }} type="gradient" title="Sign In" />
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