import React from 'react';
import { Dimensions, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { useTheme } from '../../hooks/useTheme';

const { width } = Dimensions.get("screen");

interface BrandTextInputProps extends TextInputProps {}

const BrandTextInput : React.FC<BrandTextInputProps> = ({ ...props }) => {
    const { theme: { secondary  } } = useTheme();

    return (
        <View>
            <TextInput 
                placeholderTextColor={"#797979"}
                style={[ styles.input, { backgroundColor: secondary }]}
                { ...props }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: width * 0.75,
        height: 55,
        borderRadius: 5,
        paddingHorizontal: 15,
        marginVertical: 5,
        color: "#fff",
    }
});

export default BrandTextInput;