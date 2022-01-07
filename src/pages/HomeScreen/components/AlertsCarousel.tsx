import React, { useCallback, useEffect, useRef, useState } from "react";
import Timeline from "react-native-snap-carousel";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { useSelector } from "react-redux";
import { IRootReducer } from "../../../store/reducers";
import { getUserOrganization } from "../../../store/selectors/user.selectors";
import GraphSVG from "../../SVG/GraphSVG";
import WalletAltSVG from "../../SVG/WalletAltSVG";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Screens } from "../../Navigator/enums";
import { getWalletBalanceQuery } from "../../../graphql/queries/getWalletBalance";
import { apolloClient } from "../../../../App";

const { width } = Dimensions.get("screen");

interface IAlertItem {
    title: string,
    description?: string,
    button?: {
        title: string,
        callback: () => void,
    },
    image?: () => any,
}

type IAlertProps = { item: IAlertItem };

const AlertItem : React.FC<IAlertProps> = ({ item: { image, title, description, button = {}} }) => {
    const { theme: { background, secondary, text, grey }, palette: { purple } } = useTheme();

    return (
        <View style={[ styles.item, { backgroundColor: secondary }]}>
            <View style={[ styles.innerItemContainer, { borderColor: background }]}>
                { image && image() }
                <View style={styles.itemContent}>
                    <Text style={[ styles.title, { color: text }]}>{title}</Text>
                    <Text style={[ styles.description, { color: grey }]}>{description || ""}</Text>
                    {/* <BrandGradientText text={button?.title || ""}/> */}
                    <TouchableOpacity onPress={button?.callback} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[{ color: purple }]}>{ button?.title }</Text>
                        <FontAwesomeIcon color={purple} icon={faAngleRight} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const AlertsCarousel = ({ navigation } : any) => {
    const carouselClones = useRef(3).current; 
    const state = useSelector((state:IRootReducer) => state);
    const organization = getUserOrganization(state);

    const renderWeekTimeline = ({ item }: { item: IAlertItem }) => {
        return (
            <View style={{ width, display: 'flex', alignItems: 'center' }}>
                <AlertItem item={item}/>
            </View>
        )
    }

    const rawBalance = apolloClient.readQuery({ 
        query: getWalletBalanceQuery(),
    })
    const { getWalletBalance:balance } = rawBalance ? rawBalance : {} as any; 

    const [ items, setItems ] = useState<IAlertItem[]>([]);

    const injectItems = useCallback(() => {
        const newItems:IAlertItem[] = [];
        if (!balance) {
            newItems.push({
                title: "Deposit Ethereum.",
                description: `Wallet Balance Empty. Deposit Some Ether to Begin Your Crypto Fundraising Journey.`,
                button: {
                    callback: () => { navigation.navigate(Screens.Wallet.DEPOSIT_METHODS) },
                    title: `Explore Methods`,
                },
                image: () => <WalletAltSVG width={85} />
            });
        }
        newItems.push({
            title: "Beginners Guide.",
            description: `To start, invest in ${organization?.symbol}, your token. This will also enable you to unlock the foreign portfolio.`,
            button: {
                callback: () => { navigation.navigate(Screens.Token.INFO) },
                title: `Buy ${organization?.symbol}`,
            },
            image: () => <GraphSVG width={85} />
        });
        setItems(newItems);
    }, [ organization, balance ]); 

    useEffect(injectItems, [ injectItems ]);

    return (
        <View style={styles.container}>
            <Timeline 
                loop={true}
                layout={"default"}
                loopClonesPerSide={carouselClones}
                data={items}
                itemWidth={width}
                sliderWidth={width}
                renderItem={renderWeekTimeline}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        width,
        alignItems: 'center',
    },
    item: {
        width: width * 0.9,
        height: 135,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    innerItemContainer: {
        width: (width * 0.9) - 5,
        height: 130,
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        overflow: "hidden",
        paddingLeft: 15,
    },
    title: {
        fontWeight: "600",
        fontSize: 17.5,
    },
    description: {
        marginTop: 7.5,
        marginBottom: 5,
    },
    itemContent: {
        marginLeft: 15,
        display: 'flex',
        justifyContent: 'center',
        paddingRight: 100,
    }
}); 

export default AlertsCarousel;