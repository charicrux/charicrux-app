import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform, ScrollView, KeyboardAvoidingView  } from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { useTheme } from '../../hooks/useTheme';
import { Screens } from '../Navigator/enums';
import LightbulbSVG from '../SVG/LightbulbSVG';

const {width, height} = Dimensions.get('screen');

const CreateOrganizationScreen = ({navigation}: any) => {
    const { theme: { background, text } } = useTheme();

    const handleSubmit = () => {
        navigation.navigate(Screens.Initial.LAUNCH);
    };

    return(
       
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <KeyboardAvoidingView behavior='position'>
                        <View style={styles.container}>
                            <View style={{height: height * 0.03}}></View>
                            <LightbulbSVG width={width * 0.25}/>
                            <Text style={styles.header}>Organization Request Form</Text>
                            <Text style={styles.sub}>Fill Out the Form and We Will Get Back to you ASAP.</Text>
                         
                            <View style={styles.form}>
                                <View>
                                    <Text style={styles.field}>Organization Name</Text>
                                    <BrandTextInput style={{ width: width * 0.85 }} placeholder="ex. Shoes for Education"/>
                                </View>
                                <View>
                                    <Text style={styles.field}>Brief Description</Text>
                                    <BrandTextInput style={{ width: width * 0.85 }} placeholder="Type here..."/>
                                </View>
                                <View>
                                    <Text style={styles.field}>Organization Symbol</Text>
                                    <BrandTextInput style={{ width: width * 0.85 }} placeholder="ex. SFED"/>
                                </View>
                                <View>
                                    <Text style={styles.field}>Email</Text>
                                    <BrandTextInput style={{ width: width * 0.85 }} placeholder="example@gmail.com"/>
                                </View>
                                <BrandButton onPress={handleSubmit} type='gradient' title="Submit" style={{marginVertical: 25}}/>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        minHeight: height,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#16152F',
    },
    scrollView: {
        display: 'flex',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? height: height * 1.2,
    },
    header: {
        color: '#fff',
        fontWeight: "600",
        fontSize: 25,
        marginTop: 35,
    },
    sub: {
        color: '#797979',
        fontSize: 15,
        width: width * 0.75,
        textAlign: 'center',
        marginVertical: height * 0.03,
    },
    form: {
        alignItems: 'center',
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