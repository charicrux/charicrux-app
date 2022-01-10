import { useMutation, useQuery } from '@apollo/client';
import { stubFalse } from 'lodash';
import React, { useMemo } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform, ScrollView  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import BrandButton from '../../components/BrandButton';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { ILoginDTO, loginClientMutation } from '../../graphql/mutations/login';
import { getWalletBalanceQuery } from '../../graphql/queries/getWalletBalance';
import { useTheme } from '../../hooks/useTheme';
import { setAccessToken } from '../../store/actions/auth.actions';
import { IRootReducer } from '../../store/reducers';
import { getUser, getUserOrganization, getUserWallet } from '../../store/selectors/user.selectors';
import { Screens } from '../Navigator/enums';
import AvatarSVG from '../SVG/AvatarSVG';
import InfoSVG from '../SVG/InfoSVG';

const { width, height } = Dimensions.get('screen');

const ProfileScreen = ({navigation}: any) => {
    const { theme: { background, text, grey } } = useTheme();

    const handleDeposit = () => {
        navigation.navigate(Screens.Wallet.DEPOSIT_METHODS)
    }

    const state = useSelector((state:IRootReducer) => state);
    const user = getUser(state);
    const organization = getUserOrganization(state);
    const wallet = getUserWallet(state);

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

    const handleLogOut = () => {
        setAccessToken("");
        navigation.navigate(Screens.Initial.LAUNCH);
    };

    return(
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollView}>
             <View style={{marginVertical: 25 }}>
                <InfoSVG width={width} height={width * 0.4}/>
             </View>
                <Text style={styles.header}>Account</Text>
                <TouchableOpacity onPress={handleDeposit}>
                    <View style={styles.rect}>
                        <Text style={styles.field}>Buying Power</Text>
                        <Text style={[ styles.notmoney, { color: grey }]}>
                                { walletBalance ?? "N/A" }
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDeposit}>
                    <View style={styles.rect}>
                        <Text style={styles.field}>Wallet Address</Text>
                        <Text numberOfLines={1} style={[styles.notmoney, { color: grey}]}>
                                { wallet?.address ?? "N/A" }
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={{alignItems: 'flex-start', width: width * 0.85}}>
                    <Text style={{color: '#fff', marginTop: 50, marginBottom: 5, fontSize: 15}}>User Details</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.rect}>
                        <Text style={styles.field}>Organization:</Text>
                        <Text numberOfLines={1} style={[styles.notmoney, { color: grey }]}>{organization?.name ?? "N/A"}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.rect}>
                        <Text style={styles.field}>Email:</Text>
                        <Text  numberOfLines={1}  style={[styles.notmoney, { color: grey }]}>{user?.email ?? "N/A"}</Text>
                    </View>
                </TouchableOpacity>
                <BrandButton style={styles.logOut} onPress={handleLogOut} type='gradient' title='Log Out'/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height: height,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#16152F',
    },
    scrollView: {
        width: width,
        height: height,
        display: 'flex',
        alignItems: 'center',
    },
    logOut: {
        marginTop: 25,
    },
    header: {
        color: "#fff",
        fontSize: 25,
        marginBottom: 25,
        marginTop: 25,
        fontWeight: "600",
    },
    rect: {
        flexDirection: 'row',
        width: width * 0.9,
        height: height * 0.07,
        minHeight: 35,
        backgroundColor: '#202143',
        borderRadius: 5,
        justifyContent: 'space-between',   
        alignItems: 'center',
        marginBottom: 5,
    },
    field: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 15,
        alignItems: 'flex-start',
    },
    money: {
        fontSize: 15,
        marginRight: 15,
    },
    notmoney: {
        fontSize: 15,
        marginRight: 15,
        color: '#fff',
        maxWidth: "55%",
    }
});

export default ProfileScreen;