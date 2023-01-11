import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Input } from './components';
import { colors } from './theme/colors';
import { moderateScale } from 'react-native-size-matters';


export default Login = ({ navigation }) => {
    const [securePassword, setSecurePassword] = useState(true);

    return (
        <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
            <StatusBar style="dark" />
            <ScrollView style={{
                paddingTop: moderateScale(60)
            }}>
                <Header
                    title="Login to your account"
                    text="Please sign in using your email address and password."
                />
                <View style={styles.inputBox}>
                    <Input
                        label="Email"
                        errorMessage="Enter a valid email  address"
                        containerStyle={styles.inputStyle}
                        right={() =>
                            <MaterialIcons name="error" size={20} color={colors.error} />
                        }
                    />
                    <Input
                        label="Password"
                        secureTextEntry={securePassword}
                        autoCapitalize="none"
                        right={() =>
                            <Ionicons name={securePassword ? "eye-off" : "eye"} size={20} color="#1A1A1A" onPress={() => setSecurePassword(!securePassword)} />
                        }
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Text style={styles.passwordStyle}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { }}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.btnText}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.footerText}>
                            New here? <Text style={styles.link}> Create an account</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

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
