import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, OtpInput } from './components';
import { colors } from './theme/colors';
import { moderateScale } from 'react-native-size-matters';


export default OTP = () => {
    return (
        <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
            <StatusBar style="dark" />
            <ScrollView style={{
                paddingTop: moderateScale(60)
            }}>
                <Header
                    title="Verify Token"
                    text="An OTP was sent to your email/phone number.
                    Please enter the code below"
                />
                <View style={styles.otpBox}>
                    <OtpInput />
                </View>
                <View style={styles.footer}>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { }}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.btnText}>
                            Continue
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.footerText}>
                        <Text style={styles.link}>Re-send Code</Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inputBox: {
        paddingHorizontal: "5%",
        marginTop: "5%"
    },
    inputStyle: {
        marginBottom: "8%"
    },
    otpBox: {
        marginTop: "14%"
    },
    passwordStyle: {
        color: colors.primary,
        fontSize: moderateScale(14),
        fontWeight: "600"
    },
    footerText: {
        color: "#A1A5AC",
        fontSize: moderateScale(14),
        fontWeight: "400",
        textAlign: "center"
    },
    link: {
        color: colors.primary,
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "5%",
        borderRadius: 10,
        marginTop: "10%",
        marginBottom: "10%"
    },
    btnText: {
        color: "white",
        fontSize: moderateScale(16),
        fontWeight: "600"
    },
    footer: {
        paddingHorizontal: "5%",
        marginTop: "4%"
    }
});
