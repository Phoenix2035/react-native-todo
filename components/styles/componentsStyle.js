import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        padding: 40
    },
    items: {
        flex: 1,
        marginTop: 20
    },
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
    },
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
});
