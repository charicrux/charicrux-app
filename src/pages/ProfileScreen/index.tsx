import { useQuery } from '@apollo/client';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useMemo, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform, ScrollView, TextInput, TouchableWithoutFeedback  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { apolloClient } from '../../../App';
import BrandButton from '../../components/BrandButton';
import CopyText from '../../components/CopyText';
import { getWalletPrivateKeyQuery } from '../../graphql/queries/getPrivateKey';
import { getWalletBalanceQuery } from '../../graphql/queries/getWalletBalance';
import { useTheme } from '../../hooks/useTheme';
import { setAccessToken } from '../../store/actions/auth.actions';
import { IRootReducer } from '../../store/reducers';
import { getUser, getUserOrganization, getUserWallet } from '../../store/selectors/user.selectors';
import { formatPrice } from '../../utils/formatPrice';
import { Screens } from '../Navigator/enums';
import InfoSVG from '../SVG/InfoSVG';
import * as Haptics from "expo-haptics";

const { width, height } = Dimensions.get('screen');

const ProfileScreen = ({navigation}: any) => {
    const { theme: { text, grey } } = useTheme();

    const handleDeposit = () => {
        navigation.navigate(Screens.Wallet.DEPOSIT_METHODS)
    }

    const state = useSelector((state:IRootReducer) => state);
    const user = getUser(state);
    const organization = getUserOrganization(state);
    const wallet = getUserWallet(state);

    const { data:privateKey } = useQuery<{ getWalletPrivateKey: string | null }>(getWalletPrivateKeyQuery());

    const handleLogOut = () => {
        setAccessToken("");
        apolloClient.clearStore();
        navigation.navigate(Screens.Initial.LAUNCH);
    };

    const [ showPrivateKey, setShowPrivateKey ] = useState(false);
    const handleLockPrivateKey = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);  
        setShowPrivateKey(!showPrivateKey);
    };

    return(
        <SafeAreaView style={styles.container} >
            <ScrollView contentContainerStyle={styles.scrollView}>
             <View style={{marginVertical: 25 }}>
                <InfoSVG width={width} height={width * 0.4}/>
             </View>
                <Text style={styles.header}>Account</Text>
                <View style={{alignItems: 'flex-start', width: width * 0.85}}>
                    <Text style={{color: '#fff', marginTop: 0, marginBottom: 5, fontSize: 15}}>User Details</Text>
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
                <TouchableWithoutFeedback onPress={handleLockPrivateKey}>
                <View style={styles.lockContainer}>
                    <Text style={{color: '#fff', fontSize: 15}}>Private Key</Text>
                        <FontAwesomeIcon style={{ marginLeft: 5,}} icon={showPrivateKey ? faLockOpen : faLock } color={text} />
                </View>
                </TouchableWithoutFeedback>
                    <CopyText style={[styles.rect, { marginTop: 0}]} copyText={privateKey?.getWalletPrivateKey || ""}>
                            <TextInput editable={false} secureTextEntry={!showPrivateKey} style={[{ color: grey}]}>
                                    { privateKey?.getWalletPrivateKey ?? "" }
                            </TextInput>
                    </CopyText>
                    <TouchableOpacity onPress={handleDeposit}>
                        <View style={styles.rect}>
                            <Text style={styles.field}>Wallet Address</Text>
                            <Text numberOfLines={1} style={[styles.notmoney, { color: grey}]}>
                                    { wallet?.address ?? "N/A" }
                            </Text>
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
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#16152F',
    },
    scrollView: {
        width: width,
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 150,
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
    lockContainer: {
        width: width * 0.85,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 25,
        marginHorizontal: 5,
        marginBottom: 5,
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