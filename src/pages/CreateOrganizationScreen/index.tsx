import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform, ScrollView  } from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import LightbulbSVG from '../SVG/LightbulbSVG';

const {width, height} = Dimensions.get('screen');

const CreateOrganizationScreen = ({navigation}: any) => {
    const { theme: { background, text } } = useTheme();

    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.header}>Organization Request Form</Text>
                    <Text style={styles.sub}>Fill Out the Form and We Will Get Back to you ASAP.</Text>
                    <LightbulbSVG width={width * 0.3}/>
                    <View style={styles.form}>
                        <Text style={styles.field}>Organization Name</Text>
                        <BrandTextInput placeholder="ex. Shoes for Education"/>
                        <Text style={styles.field}>Brief Description</Text>
                        <BrandTextInput placeholder="Type here..."/>
                        <Text style={styles.field}>Organization Symbol</Text>
                        <BrandTextInput placeholder="ex. SFED"/>
                        <Text style={styles.field}>Email</Text>
                        <BrandTextInput placeholder="example@gmail.com"/>
                        <BrandButton type='gradient' title="Submit" style={{marginVertical: 25}}/>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height: height * 1.1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#16152F',
    },
    header: {
        color: '#fff',
        fontSize: 25,
        marginTop: height * 0.05,
    },
    sub: {
        color: '#797979',
        fontSize: 15,
        marginVertical: height * 0.03,
    },
    form: {
        alignItems: 'flex-start',
        width: width * 0.8,
        marginVertical: height * 0.02,
    },
    field: {
        color: '#fff',
        fontSize: 15,
        marginVertical: height * 0.01,
    }
});

export default CreateOrganizationScreen;