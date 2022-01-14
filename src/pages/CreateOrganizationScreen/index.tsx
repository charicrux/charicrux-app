import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, View, Animated, Text, Platform, ScrollView, KeyboardAvoidingView  } from 'react-native';
import BrandButton from '../../components/BrandButton';
import BrandGradient from '../../components/BrandGradient';
import BrandTextInput from '../../components/BrandTextInput';
import { createOrganizationMutation, ICreateOrganizationMutation } from '../../graphql/mutations/createOrganization';
import { useTheme } from '../../hooks/useTheme';
import { emailPattern } from '../../utils/patterns';
import { Screens } from '../Navigator/enums';
import LightbulbSVG from '../SVG/LightbulbSVG';

const {width, height} = Dimensions.get('screen');

const CreateOrganizationScreen = ({navigation}: any) => {
    const { theme: { background, text } } = useTheme();
    const [ formData, setFormData ] = useState<ICreateOrganizationMutation>({});

    const [ createOrganization, { data:_data, loading, error:_error }] = useMutation(createOrganizationMutation(), {
        variables: {
            input: { ...formData }
        }
    });

    const updateFormData = (key:keyof ICreateOrganizationMutation) => (e:string) => {
        setFormData({ ...formData, [ key]: e })
    };


    const handleSubmit = () => {
        if (!formData.name || !formData.symbol || !formData.description) return; 
        if (!formData.email || !emailPattern.test(formData?.email)) return;

        createOrganization().finally(() => {
            navigation.navigate(Screens.Account.ORGANIZATIONS);
        });
    };

    return(
       
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                   
                        <View style={styles.container}>
                            <View style={{height: height * 0.03}}></View>
                            <LightbulbSVG width={width * 0.25}/>
                            <Text style={styles.header}>Create Organization</Text>
                            <Text style={styles.sub}>Fill Out the Form and We Will Deploy Your Organization.</Text>
                            <KeyboardAvoidingView behavior='position'>
                            <View style={[ styles.form, { backgroundColor: background }]}>
                         
                                <View>
                                    <Text style={styles.field}>Organization Name</Text>
                                    <BrandTextInput onChangeText={updateFormData('name')} style={{ width: width * 0.85 }} placeholder="ex. Shoes for Education"/>
                                </View>
                                <View>
                                    <Text style={styles.field}>Brief Description</Text>
                                    <BrandTextInput onChangeText={updateFormData('description')}  style={{ width: width * 0.85 }} placeholder="Type here..."/>
                                </View>
                                <View>
                                    <Text style={styles.field}>Organization Symbol</Text>
                                    <BrandTextInput onChangeText={updateFormData('symbol')}  style={{ width: width * 0.85 }} placeholder="ex. SFED"/>
                                </View>
                                <View>
                                    <Text style={styles.field}>Email</Text>
                                    <BrandTextInput onChangeText={updateFormData('email')}  style={{ width: width * 0.85 }} placeholder="example@gmail.com"/>
                                </View>
                               <View style={{ marginVertical: 25 }}>
                                    <BrandButton loading={loading} onPress={handleSubmit} type='gradient' title="Submit" />
                               </View>
                            </View>
                            </KeyboardAvoidingView>
                        </View>
                   
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
        marginTop: 25,
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
        marginTop: 5,
    },
    field: {
        color: '#fff',
        fontSize: 15,
        marginVertical: height * 0.01,
    }
});

export default CreateOrganizationScreen;