import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import BottomSheet from "reanimated-bottom-sheet";
import { apolloClient } from "../../../../App";
import BrandButton from "../../../components/BrandButton";
import BrandTextInput from "../../../components/BrandTextInput";
import { createTokenMutation } from "../../../graphql/mutations/createToken";
import { getGasEstimateQuery, IGasEstimateResponse } from "../../../graphql/queries/getGasEstimate";
import { getWalletBalanceQuery } from "../../../graphql/queries/getWalletBalance";
import { useTheme } from "../../../hooks/useTheme";
import { IRootReducer } from "../../../store/reducers";
import { getUserOrganization } from "../../../store/selectors/user.selectors";
import FactorySVG from "../../SVG/FactorySVG";

const { width, height } = Dimensions.get("screen");

interface CreateTokenSheetProps {
    navigation: any,
    show: boolean,
}

const CreateTokenSheet : React.FC<CreateTokenSheetProps> = ({ navigation, show }) => {
    const sheetRef = useRef<any | null>(null);
    const sheetHeight = useRef<number>(height).current;
    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);

    const { theme: { background, grey }, palette: { purple }} = useTheme();

    const { data:{ getGasEstimate } = {}} = useQuery<{ getGasEstimate: IGasEstimateResponse }>(getGasEstimateQuery(), { 
        variables: { input: { maxGasUnits: 1000000 }},
        // pollInterval: 15 * 1000, // 15s
    })

    const [createToken, { data:_data, loading:_loading, error:_error }] = useMutation(createTokenMutation());

    const balanceResponse = apolloClient.readQuery({ 
        query: getWalletBalanceQuery(),
    })

    const { getWalletBalance:balance  } = balanceResponse ? balanceResponse : {} as any;
    const walletBalance = useMemo(() => {
        const balance = balanceResponse?.getWalletBalance; 
        if (!balance) return "0.00"; 
        else return balance?.toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2}); 
    }, [ balance ]);

    useEffect(() => {
        sheetRef.current.snapTo(show ? 0 : 1);
    }, []);

    const handleDeployToken = () => {
        createToken().catch((e) => {
            console.log(e);
        }); 
    };  

    const handleSelectorBack = () => {
        sheetRef.current.snapTo(1);
    };

    const renderMPSelector = () => {
        return (
            <View style={[styles.container, { backgroundColor: background, height: sheetHeight - 125, marginTop: 35 }]}>
               {/* <EtherGradientTokenSVG width={width*0.7}/> */}
               <FactorySVG width={width * 0.7}/>
                <Text style={styles.header}>Deploy { organization?.symbol } Token</Text>
                <BrandTextInput 
                    style={{ width: width * 0.85 }}
                    value={organization?.name}
                    editable={false}
                />
                <View>
                    <View style={styles.field }>
                        <Text style={[{ color: purple }]}>Wallet Balance</Text>
                        <Text style={[{ color: grey }]}>{ walletBalance } ETH</Text>
                    </View>
                    <View style={styles.field }>
                        <Text style={[{ color: purple }]}>Max Gas Price</Text>
                        <Text style={[{ color: grey }]}>{ getGasEstimate?.maxGasCostETH } ETH</Text>
                    </View>
                    <View style={styles.field }>
                        <Text style={[{ color: purple }]}>Estimated Gas</Text>
                        <Text style={[{ color: grey }]}>{ getGasEstimate?.gasCostETH } ETH</Text>
                    </View>
                </View>
                <BrandButton 
                    loading={_loading}
                    onPress={handleDeployToken} 
                    type="gradient" 
                    title={`Deploy ${organization?.symbol}`}
                />
            </View> 
        )
    }


    return (
        <BottomSheet 
            ref={sheetRef}
            initialSnap={1}
            snapPoints={[sheetHeight, 0]} 
            borderRadius={25}
            renderContent={renderMPSelector}
            onCloseEnd={handleSelectorBack}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { height: -5, width: 0 },
        shadowRadius: 5,
        zIndex: 1,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        marginVertical: 15,
    },
    skip: {
        fontWeight: "600",
        marginVertical: 15,
    },
    nextContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 15,
        height: height - 75,
        flexDirection: "column",
    },
    token: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
    },
    header: {
        marginTop: (height * 0.03),
        marginBottom: 25,
        fontWeight: "600",
        fontSize: 25,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
    },
    field: {
        width: width * 0.8,
        marginVertical: 15,
        borderRadius: 30,
        marginTop: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    innertext: {
        color:'#62F6FF',
        fontSize: 18,
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: 15,
    },
    money: {
        color:'#26FFB1',
        fontSize: 18,
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: 15,
    },
    buttonContainer: {
        width: width * 0.5,
        height: 55,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 50,
        color: '#26FFB1',
    },
})
export default CreateTokenSheet;