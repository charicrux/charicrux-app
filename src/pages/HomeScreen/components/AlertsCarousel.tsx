import React, { ReactElement, useRef, useState } from "react";
import Timeline from "react-native-snap-carousel";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import BrandGradientText from "../../../components/BrandGradientText";
import UserCoin from "../../../components/UserCoin";

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
    const { theme: { background, secondary, text, grey } } = useTheme();

    return (
        <View style={[ styles.item, { backgroundColor: secondary }]}>
            <View style={[ styles.innerItemContainer, { borderColor: background }]}>
                { image && image() }
                <View style={styles.itemContent}>
                    <Text style={[ styles.title, { color: text }]}>{title}</Text>
                    <Text style={[ styles.description, { color: grey }]}>{description || ""}</Text>
                    <BrandGradientText text={button?.title || ""}/>
                </View>
            </View>
        </View>
    )
}

const AlertsCarousel = () => {
    const carouselClones = useRef(3).current; 

    const renderWeekTimeline = ({ item }: { item: IAlertItem }) => {
        return (
            <View style={{ width, display: 'flex', alignItems: 'center' }}>
                <AlertItem item={item}/>
            </View>
        )
    }

    const renderUserCoin = () => {
        return (
            <UserCoin />
        )
    };

    const [ items, setItems ] = useState<IAlertItem[]>([{
        title: "Beginners Guide.",
        description: "To start, invest in SBSD, your token. This will also enable you to unlock the foreign portfolio.",
        button: {
            callback: () => {},
            title: "Buy SBSD",
        },
        image: renderUserCoin
    }]);

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
        height: 125,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    innerItemContainer: {
        width: (width * 0.9) - 5,
        height: 120,
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        overflow: "hidden",
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
        marginLeft: 10,
        display: 'flex',
        justifyContent: 'center',
        paddingRight: 100,
    }
}); 

export default AlertsCarousel;