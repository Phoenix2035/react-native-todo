import React, { useState } from 'react';

import {
    Alert,
    FlatList,
    Keyboard,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';

import { styles } from "./components/styles/componentsStyle"


import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todo from "./components/Todo"



function App() {
    const [toDos, setToDos] = useState([
        { id: 1, todo: "کار", completed: false },
        { id: 2, todo: "قهوه", completed: false },
    ])

    const [todo, setTodo] = useState("")



    const pressHandler = id => {
        setToDos(prev => prev.filter(item => item.id !== id))
    }


    const completeHandler = id => {
        const allToDos = [...toDos]
        const findTodo = allToDos.findIndex(item => item.id === id)
        const todo = allToDos[findTodo]
        todo.completed = !todo.completed
        allToDos[findTodo] = todo
        setToDos(allToDos)
    }

    const submitHandler = () => {
        if (todo.length > 3) {
            setToDos(prev => [
                ...prev,
                {
                    id: Math.floor(Math.random() * 10000),
                    todo: todo,
                    completed: false
                }
            ])
            setTodo("")
            Keyboard.dismiss()
        } else {
            Alert.alert("به من توجه کن...", "کاری که وارد میکنی باید بیشتر از 2 کاراکتر باشه", [{ text: "فهمیدم", onPress: () => { } }])
        }
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Header />

                <View style={styles.body}>

                    <AddTodo
                        todo={todo}
                        setTodo={setTodo}
                        submitHandler={submitHandler}
                    />

                    <View style={styles.items}>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={toDos}
                            renderItem={({ item }) => (
                                <Todo
                                    todo={item}
                                    pressHandler={pressHandler}
                                    completeHandler={completeHandler}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}



export default App