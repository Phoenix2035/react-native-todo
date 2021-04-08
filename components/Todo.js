import React from 'react'
import { MaterialIcons } from "@expo/vector-icons"
import {Text, View, TouchableOpacity } from 'react-native'

import { styles } from "./styles/componentsStyle"

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



export default Todo