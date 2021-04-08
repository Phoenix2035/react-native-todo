import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from "./styles/componentsStyle"


function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>چه کاری میخوای انجام بدی</Text>
        </View>
    )
}



export default Header