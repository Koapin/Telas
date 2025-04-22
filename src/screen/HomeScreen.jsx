import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("LOGIN");
    };
    const handleSignup = () => {
        navigation.navigate("SIGNUP");
    };
    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} 
            style={styles.logo}/>
            <Image source={require("../assets/icarus-logo.png")} 
            style={styles.bannerImage}/>
            <Text style={styles.title}>
                Lorem ipsum dolor
            </Text>
            <Text style={styles.subTitle}>
                Lorem ipsum dolor sit amet consectur
                adipiscing elit, sed do elusmod tempor
                incididunt ut labore et dolore
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.loginButtonWrapper, 
                { backgroundColor: colors.primary}]} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleSignup}>
                    <Text style={styles.signupButtonText}>Sign-up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    logo: {
        height:40,
        width: 140,
        marginVertical: 20
    },

    bannerImage: {
        marginVertical: 20,
        height:250,
        width: 230
    },

    title: {
        fontSize: 36,
        fontFamily: fonts.DMsans,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.primary,
        marginTop: 40
    },

    subTitle: {
        fontSize: 20,
        textAlign: "center",
        color: colors.secondary,
        paddingHorizontal: 20,
        fontFamily: fonts.Italic
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        borderWidth: 1,
        borderColor: colors.primary,
        width: "80%",
        height: 60,
        borderRadius: 100
    },

    loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 100
    },

    loginButtonTex: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.DMsans
    },

    signupButtonText: {
        fontSize: 20,
        color: colors.white,
        fontFamily: fonts.DMsans
    }
});