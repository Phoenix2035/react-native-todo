import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import AddPerson from './components/AddPerson';
import Header from './components/Header';
import Persons from "./components/Persons"

function App() {
    const [persons, setPersons] = useState([])

    const [person, setPerson] = useState("")


    const pressHandler = id => {
        setPersons(prev => prev.filter(item => item.id !== id))
    }

    const submitHandler = () => {
        if (person.length > 2) {
            setPersons(prev => [
                ...prev,
                {
                    id: Math.floor(Math.random() * 10000),
                    name: person
                }
            ])
            setPerson("")
            Keyboard.dismiss()
        } else {
            Alert.alert("به من توجه کن...", "اسمی که وارد میکنی باید بیشتر از 2 کاراکتر باشه", [{ text: "فهمیدم", onPress: () => { } }])
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Header />

                <View style={styles.body}>

                    <AddPerson
                        person={person}
                        setPerson={setPerson}
                        submitHandler={submitHandler}
                    />

                    <View style={styles.items}>
                        <FlatList
                            keyExtractor={item => item.id.toString()}
                            data={persons}
                            renderItem={({ item }) => (
                                <Persons
                                    person={item}
                                    pressHandler={pressHandler}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        padding: 40
    },
    items: {
        marginTop: 20
    }
});


export default App