import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    View, 
    Text, 
    Platform, 
    KeyboardAvoidingView 
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import EtherGradientTokenSVG from '../SVG/EtherGradientTokenSVG';

const { width, height } = Dimensions.get("screen");

const CreateTokenScreen = ({navigation} : any) => {


    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.token}>
                <EtherGradientTokenSVG width={width*0.7}/>
                <Text style={styles.header}>Create a Token</Text>
                <View style={styles.field}>
                    <Text style={styles.innertext}>Organization:</Text>
                </View>
                <View style={styles.field}>
                    <Text style={styles.innertext}>
                        Ether Required:
                        <Text style={styles.money}> 0.001 ETH</Text>
                    </Text>
                </View>
                <View style={styles.field}>
                    <Text style={styles.innertext}>
                        Ether Held:
                        <Text style={styles.money}> 0 ETH</Text>
                    </Text>
                </View>
                <TouchableOpacity>
                    <BrandGradient style={styles.buttonContainer}>
                        <Text style={{color: '#26FFB1', fontSize: 20}}>Create Token</Text>
                    </BrandGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        display: 'flex',
        backgroundColor: '#16152F',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 15,
        height: height - 75,
        flexDirection: "column",
    },
    token: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
    },
    header: {
        marginTop: (height * 0.03),
        marginBottom: 25,
        fontWeight: "400",
        fontSize: 25,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
    },
    field: {
        width: '85%',
        height: '8%',
        backgroundColor: '#6467C6',
        borderRadius: 30,
        marginTop: 10,
        justifyContent: 'center',
    },
    innertext: {
        color:'#62F6FF',
        fontSize: 18,
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: 15,
    },
    money: {
        color:'#26FFB1',
        fontSize: 18,
        display: 'flex',
        alignItems: 'flex-start',
        marginLeft: 15,
    },
    buttonContainer: {
        width: width * 0.5,
        height: 55,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 50,
        color: '#26FFB1',
    },
});

export default CreateTokenScreen;