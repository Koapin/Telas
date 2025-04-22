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
        backgroundColor: colors.yellow
    },

    bannerImage: {
        marginTop: 100,
        height:300,
        width: 230,
        alignSelf: "center"
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
        borderRadius: 100,
        alignSelf: "center"
    },

    loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "51%",
        borderRadius: 100
    },

    loginButtonText: {
        fontSize: 20,
        color: colors.yellow,
        fontFamily: fonts.DMsans
    },

    signupButtonText: {
        fontSize: 20,
        color: colors.primary,
        fontFamily: fonts.DMsans
    }
});