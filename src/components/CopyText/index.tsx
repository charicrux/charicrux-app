import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { ReactChild } from "react";
import { TouchableOpacity, Clipboard, ScrollView, View, StyleSheet, Dimensions, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import * as Haptics from "expo-haptics";

interface CopyTextProps {
    children: ReactChild,
    copyText: any,
    style?: StyleProp<ViewStyle>,
}

const { width, height } = Dimensions.get("window");

const CopyText : React.FC<CopyTextProps> = ({ children, copyText, style }) => {
    const { theme } = useTheme();

    const handleCopy = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);  
        Clipboard.setString(copyText || "")
    };
    
    return (
        <TouchableOpacity 
            onPress={handleCopy}
            style={[styles.container, { backgroundColor: theme.secondary }, style]}>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15, paddingRight: 50 }}
            >
                { children }
            </ScrollView>
            <View style={[ styles.copyContainer, { backgroundColor: theme.secondary }]}>
                    <FontAwesomeIcon color={"rgba(255, 255, 255, 0.5)"} size={17.5} icon={faCopy} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: 55,
        marginVertical: 10,
        borderRadius: 5,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
    },
    copyContainer: {
        width: 45,
        height:"100%",
        position: "absolute",
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: "#fff",
        // borderStyle: "solid",
    }
});

export default CopyText;