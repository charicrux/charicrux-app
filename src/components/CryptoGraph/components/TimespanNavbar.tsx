import React, { useState } from "react";
import { Dimensions, View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { ETimeframe } from "./enums/timeframe.enum";

const { width } = Dimensions.get("window");

interface TimespanItemProps {
    text: string;
    type: ETimeframe,
    timeframeSelected: ETimeframe;
    handleChange: (e:ETimeframe) => void;
}

const TimespanItem : React.FC<TimespanItemProps> = ({ text, type, timeframeSelected, handleChange }) => {
    const { theme, palette } = useTheme();

    const handleSelect = () => handleChange(type);

    return (
        <TouchableWithoutFeedback onPress={handleSelect}>
            <Text style={[ styles.itemLabel, { color: timeframeSelected === type ? palette.purple : theme.text }]}>
                { text }
            </Text>
        </TouchableWithoutFeedback>
    )
}

const TimespanNavbar = () => {  
    const { theme } = useTheme();

    const [ timeframeSelected, setTimeframSelected ] = useState<ETimeframe>(ETimeframe.ONE_DAY);

    const handleChange = (e:ETimeframe) => setTimeframSelected(e);

    return (
        <View style={[styles.container ]}>
            <View style={[ styles.navbar,  { backgroundColor: theme.background }]}>
                <TimespanItem 
                    timeframeSelected={timeframeSelected} 
                    handleChange={handleChange} 
                    type={ETimeframe.LIVE} 
                    text="live"
                />
                <TimespanItem 
                    timeframeSelected={timeframeSelected} 
                    handleChange={handleChange} 
                    type={ETimeframe.ONE_HOUR}  
                    text="1h"
                />
                <TimespanItem 
                    timeframeSelected={timeframeSelected} 
                    handleChange={handleChange} 
                    type={ETimeframe.ONE_DAY}  
                    text="1d"
                />
                <TimespanItem 
                    timeframeSelected={timeframeSelected} 
                    handleChange={handleChange} 
                    type={ETimeframe.ONE_WEEK}  
                    text="1w"
                />
                <TimespanItem 
                    timeframeSelected={timeframeSelected} 
                    handleChange={handleChange} 
                    type={ETimeframe.ONE_MONTH}  
                    text="1m"
                />
                <TimespanItem 
                    timeframeSelected={timeframeSelected} 
                    handleChange={handleChange} 
                    type={ETimeframe.ONE_YEAR}  
                    text="1y"
                />
                <TimespanItem 
                    timeframeSelected={timeframeSelected} 
                    handleChange={handleChange} 
                    type={ETimeframe.ALL}  
                    text="all"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 22.5,
        borderRadius: 5,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        transform: [{ translateY: -10 }]
    },
    navbar: {
        height: 22.5,
        borderRadius: 5,
        width: 300,
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: 'center',
    },
    itemLabel: {
        fontWeight: "500",
        fontSize: 12,
        textTransform: "uppercase",
    }
});

export default TimespanNavbar;