import React from 'react'
import { MaterialIcons } from "@expo/vector-icons"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function Todo({ todo, pressHandler, completeHandler }) {
    return (
        <TouchableOpacity onPress={() => completeHandler(todo.id)}>
            <View style={styles.todo}>
                <MaterialIcons
                    name="delete"
                    size={21}
                    color="coral"
                    onPress={() => pressHandler(todo.id)}
                />
                <Text style={[styles.todoName,
                todo.completed ?
                    { textDecorationLine: "line-through" }
                    : {}]}>
                    {todo.todo}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        padding: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: "orangered",
        borderRadius: 20,
        borderStyle: "dashed",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    todoName: {
        fontSize: 17,
        fontWeight: "bold",
    },

})


export default Todo