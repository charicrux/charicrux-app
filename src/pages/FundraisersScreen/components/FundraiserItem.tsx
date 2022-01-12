import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet, View, Text  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "../../../hooks/useTheme";
import FadeIn from "../../../components/FadeIn";
import { IFundraiser } from "../interfaces/fundraiser.interface";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const {width} = Dimensions.get('screen');

type FundraiserItemProps = {
    fundraiser: IFundraiser,
    handlePress: (e:IFundraiser) => void,
}

const FundraiserItem: React.FC<FundraiserItemProps> = ({ fundraiser, handlePress }) => {
    const { theme: { background, text }, palette: { purple }} = useTheme();

    const [ mounted, setMounted ] = useState(false);
    useEffect(() => { setMounted(true); () => setMounted(false) }, []);

    const handleFundraiserPress = () => handlePress(fundraiser);

    return (
        <FadeIn show={mounted}>
            <TouchableOpacity onPress={handleFundraiserPress} style={[ styles.container, { backgroundColor: background }]}>
                <View style={styles.infoContainer}>
                    <Text style={[styles.org, { color: text }]}>{ fundraiser?.organization?.symbol }</Text>
                    <Text style={styles.name}>{fundraiser.name}</Text>
                </View>
                <View style={styles.goalContainer}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={[ styles.goal, { color: text }]}>Goal:</Text>
                        <FontAwesomeIcon style={{ marginLeft: 5 }} color={purple} icon={faEthereum} />
                        <Text style={[ styles.goalAmount, { color: purple }]}>
                            { fundraiser.goal }
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={[styles.raised, { color: text }]}>Raised:</Text>
                        <FontAwesomeIcon style={{ marginLeft: 5 }} color={purple} icon={faEthereum} />
                        <Text style={[ styles.goalAmount, { color: purple }]}>
                            0.0
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </FadeIn>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.8,
        height: 100,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 12.5,
        padding: 10,
    },
    infoContainer: {
        flex: 1,
        display: 'flex',
    },
    goalContainer: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    goalAmount: {

    },
    org: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: 15,
        fontWeight: '600',
    },
    name: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 15,
        marginTop: 12.5,
    },
    goal: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    raised: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        color: '#26FFB1',
    }
});

export default FundraiserItem;