import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

function AddPerson({ person, setPerson, submitHandler }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="یه نفر رو اضافه کن..."
                placeholderTextColor="darkgrey"
                onChangeText={setPerson}
                value={person}
            />
            <Button
                onPress={submitHandler}
                title="اضافه کردن شخص"
                color="orange"
            />


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 15,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "orange",
        fontSize: 15
    },
})


export default AddPerson