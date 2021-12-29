import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text, StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import BrandGradient from '../BrandGradient';

const { width } = Dimensions.get('screen');

type BrandButtonProps = {
    type?: "gradient" | "default",
    title: string,
    style?: StyleProp<ViewStyle>,
} & TouchableOpacityProps;

const BrandButton : React.FC<BrandButtonProps> = ({ type = "default", title, style, ...props }) => {
    const { theme: { text, secondary } } = useTheme();
    return (
        <TouchableOpacity 
            { ...props }
            style={[ styles.buttonContainer, { backgroundColor: secondary }, style ]}
        >
            {
                type === "gradient" ? (
                    <BrandGradient style={[ styles.buttonContainer ]}>
                        <Text style={[ styles.buttonText, { color: text }]}>{ title }</Text>
                    </BrandGradient>
                ) : (
                    <Text style={[ styles.buttonText, { color: text }]}>{ title }</Text>
                )
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width * 0.75,
        height: 55,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText: {
        fontWeight: "500",
        fontSize: 16,
    },  
});

export default BrandButton; 