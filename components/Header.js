import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>چه کاری میخوای انجام بدی</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 110,
        backgroundColor: "orangered",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: 'bold',
    }
})


export default Header