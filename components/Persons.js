import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function Person({ person, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(person.id)}>
            <Text style={styles.person}>{person.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    person: {
        padding: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "orangered",
        borderRadius: 20,
        borderStyle: "dashed",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
    }
})


export default Person