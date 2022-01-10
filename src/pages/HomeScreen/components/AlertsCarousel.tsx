import React, { useRef } from "react";
import Timeline from "react-native-snap-carousel";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const { width } = Dimensions.get("screen");

export interface IAlertItem {
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

interface AlertsCarouselProps {
    navigation?: any,
    items: IAlertItem[],
}

const AlertsCarousel : React.FC<AlertsCarouselProps> = ({ navigation, items } : any) => {
    const carouselClones = useRef(3).current; 

    const renderWeekTimeline = ({ item }: { item: IAlertItem }) => {
        return (
            <View style={{ width, display: 'flex', alignItems: 'center' }}>
                <AlertItem item={item}/>
            </View>
        )
    }

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