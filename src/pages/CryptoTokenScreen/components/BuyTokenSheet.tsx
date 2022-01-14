import { useMutation, useQuery } from "@apollo/client";
import { isNull } from "lodash";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import BottomSheet from "reanimated-bottom-sheet";
import { apolloClient } from "../../../../App";
import BrandButton from "../../../components/BrandButton";
import BrandTextInput from "../../../components/BrandTextInput";
import { IBuyTokensForFixedEtherDTO, purchaseTokensForFixedEtherMutation } from "../../../graphql/mutations/buyTokensForFixedEther";
import { createTokenMutation } from "../../../graphql/mutations/createToken";
import { IAggregatedTokenResponse } from "../../../graphql/queries/getAggregatedToken";
import { getGasEstimateQuery, IGasEstimateResponse } from "../../../graphql/queries/getGasEstimate";
import { getTokenStatsQuery } from "../../../graphql/queries/getTokenStats";
import { getWalletBalanceQuery } from "../../../graphql/queries/getWalletBalance";
import { useTheme } from "../../../hooks/useTheme";
import { IRootReducer } from "../../../store/reducers";
import { getUserOrganization } from "../../../store/selectors/user.selectors";
import { formatPrice } from "../../../utils/formatPrice";
import FactorySVG from "../../SVG/FactorySVG";
import ShoppingSVG from "../../SVG/ShoppingSVG";

const { width, height } = Dimensions.get("screen");

interface BuyTokenSheetProps {
    navigation: any,
    show: boolean,
    token:IAggregatedTokenResponse,
    setShow: (e:boolean) => void,
}

const BuyTokenSheet : React.FC<BuyTokenSheetProps> = ({ show, setShow, token }) => {
    const sheetRef = useRef<any | null>(null);
    const sheetHeight = useRef<number>(height).current;
    const state = useSelector((state:IRootReducer) => state);
    const { data:balanceResponse, refetch:_refetchBalance, error:_balanceError } = useQuery(getWalletBalanceQuery());

    const { theme: { background, text }, palette: { purple, red }} = useTheme();
    const [ ether, setEther ] = useState(0);

    const { data:tokenStatsResponse, refetch, error:_error } = useQuery(getTokenStatsQuery(), { 
        fetchPolicy:"network-only",
        variables: { input: { tokenId: token?._id, ether }}
    });

    const tokenStats = tokenStatsResponse ? tokenStatsResponse?.getTokenStats : {};

    const { getWalletBalance:balance  } = balanceResponse ? balanceResponse : {} as any;
    const walletBalance = useMemo(() => {
        const balance = balanceResponse?.getWalletBalance; 
        if (!balance) return "0.00"; 
        else return balance?.toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2}); 
    }, [ balance ]);

    useEffect(() => {
        sheetRef.current.snapTo(show ? 0 : 1);
        if (show) refetch();
    }, [ show ]);

    const handleSelectorBack = () => {
        sheetRef.current.snapTo(1);
        setShow(false);
    };

    const tokenCount = useMemo(() => {
        if (!tokenStats?.price && tokenStats?.price !== 0) return null;
        else return formatPrice(tokenStats?.price);
    }, [ tokenStats?.price ]);

    const handleEtherChange = (e:string) => {
        const etherValue = parseFloat(e); 
        if (!e.length || isNaN(etherValue)) { 
            setEther(0); return
        } 
        else setEther(etherValue);
    };

    const transactionError = useMemo(() => {
        if (ether > balance) return true; 
        else if (!tokenStats?.price) return true; 
        else return false; 
    }, [ ether, balance,  tokenStats ]);

    const [ purchaseTokensForFixedPrice ] = useMutation<unknown, { input: IBuyTokensForFixedEtherDTO}>(purchaseTokensForFixedEtherMutation(), {
        variables: { input: { ether, tokenId: token?._id }}
    })

    const [ transactionInProgress, setTransactionInProgress ] = useState(false);

    const handleBuy = () => {
        if (transactionError || !token._id) {
            return; 
        }

        setTransactionInProgress(true);

        purchaseTokensForFixedPrice()
            .then((e:any) => {
                if (e?.data?.purchaseTokensForFixedEther) {
                    setShow(false)
                }
            })
            .catch( e => { console.log(e) })
            .finally(() => {
                setTransactionInProgress(false);
            });
    }

    const renderMPSelector = () => {
        return (
            <View style={[styles.container, { backgroundColor: background, height: sheetHeight -125, marginTop: 35 }]}>
                <View style={styles.headerContainer}>  
                    <Text style={[ styles.subheader ]}>{ token?.symbol }</Text>
                    <Text style={[ styles.header ]}>Buy { token?.name }</Text>
                </View>
                <ShoppingSVG width={width * 0.65} />
                <View style={styles.inputContainer}>
                    <Text style={[ styles.label, { color: text }]}>Wallet Balance</Text>
                    <BrandTextInput editable={false} value={walletBalance} />
                    <Text style={[ styles.label, { color: text }]}>Amount to Spend (Ethereum)</Text>
                    <BrandTextInput onChangeText={handleEtherChange} placeholder="ex. 0.0001" />
                </View>
                <View style={styles.buttonContainer}>
                    { ether > balance &&  <Text style={[ styles.warning, { color: red }]}>Insufficient Balance</Text> }
                    <BrandButton
                        disabled={transactionError} 
                        onPress={handleBuy}  
                        loading={transactionInProgress}
                        type="gradient" 
                        title={`Buy${ !isNull(tokenCount) ? ` ${tokenCount}` : ""} ${ token?.symbol }`} />
                </View>
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
    },
    warning: {
        marginBottom: 5,
    },
    label: {
        marginLeft: 25,
        fontWeight: "600", 
        marginTop: 10, 
    },
    subheader: {
        marginVertical: 10,
        fontWeight: "600",
        fontSize: 15,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
    },
    headerContainer: {
        width: width,
        paddingHorizontal: 25,
        marginBottom: 25,
    },
    text: {
        marginVertical: 15,
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
        marginBottom: 25,
        fontWeight: "600",
        fontSize: 25,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
    },
    buttonContainer: {
        width: width * 0.5,
        height: 55,
        borderRadius: 5,
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems:'center',
        marginTop: 50,
        color: '#26FFB1',
    },
    inputContainer: {
        marginTop: 15,
    }
})
export default BuyTokenSheet;