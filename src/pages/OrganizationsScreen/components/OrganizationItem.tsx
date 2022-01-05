import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, StyleSheet, View, Text  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "../../../hooks/useTheme";
import { IOrganization } from "../interfaces/organization.interface";
import Svg, { Text as SVGText } from "react-native-svg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import FadeIn from "../../../components/FadeIn";

const { width } = Dimensions.get('screen');

type OrganizationItemProps = {
    organization: IOrganization,
    handlePress: (e:IOrganization) => void,
}

const OrganizationItem : React.FC<OrganizationItemProps> = ({ organization, handlePress }) => {
    const { theme: { background, secondary, text }} = useTheme();

    const [ mounted, setMounted ] = useState(false);
    useEffect(() => { setMounted(true); () => setMounted(false) }, []);

    const compressedSymbol = useMemo(() => {
        return organization.symbol?.slice(0, 2);
    }, [ organization.symbol ]);

    const handleOrganizationPress = () => handlePress(organization);

    return (
        <FadeIn show={mounted}>
            <TouchableOpacity onPress={handleOrganizationPress} style={[ styles.container, { backgroundColor: secondary }]}>
                <View style={[ styles.symbolLogoContainer, { backgroundColor: background }]}>
                <Svg height="60" width="60">
                    <SVGText
                        fill="none"
                        stroke="#fff"
                        fontSize="20"
                        fontFamily="Verdana"
                        fontWeight="bold"
                        x="30.5"
                        y="37.5"
                        textAnchor="middle"
                    >
                        { compressedSymbol }
                    </SVGText>
                </Svg>
                </View>
                <View style={styles.description}>
                    <Text style={[ styles.symbol, { color: text }]}>{ organization.symbol }</Text>
                    <Text style={[{ fontSize: 13, color: text }]}>{ organization.name }</Text>
                </View>
                <FontAwesomeIcon color={text} icon={faAngleRight} />
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
    symbolLogoContainer: {
        height: 50,
        width: 50,
        marginRight: 15,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    compressedSymbol: {
        fontSize: 25,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 2,
        textShadowColor: '#fff',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 60,
        width: width * 0.65,
    },
    symbol: {
        fontWeight: "500",
        marginBottom: 5,
        fontSize: 13,
    }
});

export default OrganizationItem;