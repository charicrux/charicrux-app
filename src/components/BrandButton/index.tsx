import React, { useEffect, useRef } from 'react';
import { 
    Dimensions, 
    StyleSheet, 
    TouchableOpacity, 
    Text, 
    StyleProp, 
    ViewStyle, 
    TouchableOpacityProps, 
    ActivityIndicator, 
    View,
    Animated
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import BrandGradient from '../BrandGradient';

const { width } = Dimensions.get('screen');

type BrandButtonProps = {
    loading?: boolean,
    type?: "gradient" | "default",
    title: string,
    style?: StyleProp<ViewStyle>,
} & TouchableOpacityProps;

const BrandButton : React.FC<BrandButtonProps> = ({ type = "default", title, style, loading = false, ...props }) => {
    const { theme: { text, secondary } } = useTheme();

    const opacityVal = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(
            opacityVal, {
                duration: 350,
                toValue: loading ? 0.25 : 1,
                useNativeDriver: true,
            }
        ).start();
    }, [ loading ]);

    return (
        <TouchableOpacity 
            { ...props }
            style={styles.container}
            disabled={loading}
        >
            <View style={styles.loaderContainer}>
                <ActivityIndicator animating={loading} style={styles.loader} />
            </View>
            <Animated.View style={[ styles.buttonContainer, { backgroundColor: secondary, opacity: opacityVal }, style ]}>
                {
                    type === "gradient" ? (
                        <BrandGradient style={[ styles.buttonContainer ]}>
                            <Text style={[ styles.buttonText, { color: text }]}>{ title }</Text>
                        </BrandGradient>
                    ) : (
                        <Text style={[ styles.buttonText, { color: text }]}>{ title }</Text>
                    )
                }
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.75,
        height: 55,
    },
    buttonContainer: {
        width: width * 0.75,
        height: 55,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        position: "relative",
    },
    buttonText: {
        fontWeight: "500",
        fontSize: 16,
    },  
    loaderContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {}
});

export default BrandButton; 