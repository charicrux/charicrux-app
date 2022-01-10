import { useMutation, useQuery } from '@apollo/client';
import { stubFalse } from 'lodash';
import React, { useMemo } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform, ScrollView  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BrandButton from '../../components/BrandButton';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { ILoginDTO, loginClientMutation } from '../../graphql/mutations/login';
import { getWalletBalanceQuery } from '../../graphql/queries/getWalletBalance';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import AvatarSVG from '../SVG/AvatarSVG';

const { width, height } = Dimensions.get('screen');

const ProfileScreen = ({navigation}: any) => {
    const { theme: { background, text } } = useTheme();

    const handleDeposit = () => {
        navigation.navigate(Screens.Wallet.DEPOSIT_METHODS)
    }

    const [loginUser, { data:_data, loading:_loading, error:_error }] = useMutation<unknown, { input: ILoginDTO }>(loginClientMutation, {});

    

    const { data:balanceResponse, refetch, error } = useQuery(getWalletBalanceQuery());

    const walletBalance = useMemo(() => {
        const balance = balanceResponse?.getWalletBalance; 
        if (!balance && !!error?.clientErrors.length === false) return "0.00"; 
        else if (!balance && !!error?.clientErrors.length) return null; 
        else return balance?.toLocaleString("en",{
            useGrouping: false, 
            minimumFractionDigits: 2,
            maximumFractionDigits: 5,
        }); 
    }, [ balanceResponse, error ]);

    const email = (() => {
        loginUser().then(({data}: any) => {
            return data.email;
        }).catch((_: any) => {console.log(_)});
    });

    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{marginBottom: 50}}></View>
                <AvatarSVG width={width*0.6} />
                <Text style={styles.header}>Your Account</Text>
                <TouchableOpacity onPress={handleDeposit}>
                    <View style={styles.rect}>
                        <Text style={styles.field}>Ether Deposited:</Text>
                        <Text style={styles.money}>
                                { walletBalance ?? "N/A" }
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{alignItems: 'flex-start', width: width * 0.85}}>
                    <Text style={{color: '#fff', marginTop: 50, marginBottom: 5, fontSize: 15}}>User Info</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.rect}>
                        <Text style={styles.field}>Organization:</Text>
                        <Text></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.rect}>
                        <Text style={styles.field}>Email:</Text>
                        <Text style={styles.notmoney}>{email ?? "N/A"}</Text>
                    </View>
                </TouchableOpacity>
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
    header: {
        color: "#fff",
        fontSize: 25,
        marginBottom: 50,
    },
    rect: {
        flexDirection: 'row',
        width: width * 0.9,
        height: height * 0.05,
        backgroundColor: '#202143',
        borderRadius: 10,
        justifyContent: 'space-between',   
        alignItems: 'center',
        marginBottom: 5,
    },
    field: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 15,
        alignItems: 'flex-start',
        width: '40%',
    },
    money: {
        fontSize: 15,
        marginRight: 15,
        color: '#26FFB1',
        width: '10%',
    },
    notmoney: {
        fontSize: 15,
        marginRight: 15,
        color: '#fff',
        width: '10%',
    }
});

export default ProfileScreen;