import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet, View, Text, TouchableNativeFeedbackBase  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "../../../hooks/useTheme";
import FadeIn from "../../../components/FadeIn";
import { IFundraiser } from "../interfaces/fundraiser.interface";
import FundraisersScreen from "..";

const {width} = Dimensions.get('screen');

type FundraiserItemProps = {
    fundraiser: IFundraiser,
    handlePress: (e:IFundraiser) => void,
}

const FundraiserItem: React.FC<FundraiserItemProps> = ({ fundraiser, handlePress }) => {
    const { theme: { background, secondary, text }} = useTheme();

    const [ mounted, setMounted ] = useState(false);
    useEffect(() => { setMounted(true); () => setMounted(false) }, []);

    const handleFundraiserPress = () => handlePress(fundraiser);

    return (
        <FadeIn show={mounted}>
            <TouchableOpacity onPress={handleFundraiserPress} style={[ styles.container, { backgroundColor: background }]}>
                <Text style={styles.org}>Insert organization somehow</Text>
                <Text style={styles.name}>{fundraiser.name}</Text>
                <View style={{justifyContent: 'space-between'}}>
                    <Text style={styles.goal}>Goal: $ {fundraiser.goal}</Text>
                    <Text style={styles.raised}>Raised: $ {fundraiser.raised}</Text>
                </View>
            </TouchableOpacity>
        </FadeIn>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        height: 65,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12.5,
    },
    org: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 15,
    },
    name: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 15,
    },
    goal: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        color: '#26FFB1',
    },
    raised: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        color: '#26FFB1',
    }
});

export default FundraiserItem;