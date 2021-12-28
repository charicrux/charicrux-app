import React, { ReactChild } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type BrandGradientProps = {
    children?: ReactChild,
    style?: StyleProp<ViewStyle>,
}

const BrandGradient : React.FC<BrandGradientProps> = ({ children, style }) => {
    return (
        <View style={[ styles.container, style ]}>
            <LinearGradient 
                colors={['rgba(178, 40, 188, 0.47)', '#666AFF', '#62F6FF']}
                style={[ styles.gradient ]}
                start={[ 0, 0 ]}
                end={[ 1, 1 ]}
                locations={[ 0.35, 0.6, 1 ]}
            />
            <View>
                { children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
    },
    gradient: {
        position: 'absolute',
        width: "100%",
        height: "100%",
    }
});

export default BrandGradient;