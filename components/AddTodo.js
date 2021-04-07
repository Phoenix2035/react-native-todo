import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

function AddTodo({ todo, setTodo, submitHandler }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="چه کاری میخوای انجام بدی؟"
                placeholderTextColor="darkgrey"
                onChangeText={setTodo}
                value={todo}
            />
            <Button
                onPress={submitHandler}
                title="اضافه کردن کار جدید"
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


export default AddTodo