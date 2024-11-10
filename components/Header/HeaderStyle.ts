import { StyleSheet } from "react-native";

export const HeaderStyle = StyleSheet.create({
    header: {
        backgroundColor: "#23252b",
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        display: "flex",
        flexDirection: "row",
        margin: 0,
        position:"absolute",
        top: 0,
    },
    headerText: {
        fontSize: 20,
        color:"#ff640a",
        fontWeight: "bold",
        padding: 2,
    },
});