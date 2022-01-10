import React, { useCallback, useEffect, useState } from 'react';
import {
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    View, 
    Text, 
    KeyboardAvoidingView, 
    Keyboard
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BrandButton from '../../components/BrandButton';
import BrandTextInput from '../../components/BrandTextInput';
import { createUserMutation, ICreateUserDTO } from '../../graphql/mutations/createUser';
import { useTheme } from '../../hooks/useTheme';
import { emailPattern } from '../../utils/patterns';
import { Screens } from '../Navigator/enums';
import WalletSVG from '../SVG/WalletSVG';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"; 
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../store/actions/auth.actions';
import { useMutation } from '@apollo/client';
import { IOrganization } from '../OrganizationsScreen/interfaces/organization.interface';
import { setAggregatedUser } from '../../store/actions/user.actions';

const { width, height } = Dimensions.get("screen");

const CreateAccountScreen = ({ route, navigation} : any) => {
    const [ formData, setFormData ] = useState<ICreateUserDTO>({});

    const [createUser, { data:_data, loading:_loading, error:_error }] = useMutation<unknown, { input: ICreateUserDTO }>(createUserMutation(), {
        variables: { input: { ...formData }}
    });
    const { theme: { background, text, grey } } = useTheme();
    
    const handleLogin = () => {
        navigation.navigate(Screens.Account.LOGIN);
    }

    const handleHome = () => {
        navigation.navigate(Screens.TAB_NAVIGATOR.INITIAL);
    };

    const setOrganization = useCallback(() => {
        const organization:IOrganization = route.params; 
        if (organization) updateFormData("organizationId")(organization._id);
    }, [ route.params ]);

    useEffect(setOrganization, [ setOrganization ]);

    const updateFormData = (key:keyof ICreateUserDTO) => (e:string) => {
        setFormData({ ...formData, [ key]: e })
    };

    const dispatch = useDispatch();

    const handleCreateAccount = () => {
        Keyboard.dismiss();

        if (!formData.email || !emailPattern.test(formData?.email)) return
        else if (!formData.pass || formData?.pass?.length < 8) return;
        createUser().then(({ data } : any) => {
            const { accessToken, ...aggregatedUser } = data.createUser; 
            dispatch(setAggregatedUser(aggregatedUser));
            dispatch(setAccessToken(accessToken));
            handleHome();
        }).catch((_: any) => {
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
                    <BrandButton onPress={handleCreateAccount} style={{ marginTop: 25 }} type="gradient" title="Mint Wallet" />
                    <View style={styles.orContainer}>
                        <View style={[styles.horizontalLineLeft]}/>
                        <Text style={[styles.or]}>Or</Text>
                        <View style={[styles.horizontalLineRight]}/>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
                            <Text style={[ styles.notice ]}>
                                Already Have an Account? Login
                            </Text>
                            <FontAwesomeIcon color={grey} icon={faAngleRight} />
                        </TouchableOpacity>
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
    loginContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: width,
        alignItems: 'center',
        marginBottom: 25,
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
    },
    orContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        justifyContent: "space-around"
    },
    or: {
        color: '#8F8F8F',
        width: "10%",
        textAlign: 'center',
    },
    horizontalLineLeft: {
        borderBottomWidth: 1,
        borderBottomColor: '#8F8F8F',
        width: '35%',
    },
    horizontalLineRight: {
        borderBottomWidth: 1,
        borderBottomColor: '#8F8F8F',
        width: '35%'
    },
});

export default CreateAccountScreen;