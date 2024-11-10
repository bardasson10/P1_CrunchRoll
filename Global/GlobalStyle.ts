import { Button, StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
    containerBody: {
        backgroundColor: "#000000",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color:"#ff640a",
        fontFamily:"MsTrebuchet",
        padding: 10
    },

    bodyTexts: {
        color:"#ffffff",
        fontSize: 25,
        position: "absolute",
        top: 75,
        fontWeight: 500,
    },

    containerCardLogin: {
        position: "absolute",
        top: 95,
        marginTop: 20,
        height: 350,
    },
    buttonLogin: {
        backgroundColor: "#000000",
        borderColor: "#59595b",
        color: "#59595b",
        borderWidth: 2,
        width: 144,
        height: 34,
        fontSize: 20,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        top: -40,
    },
    backButton: {
        backgroundColor: "#000000",
        color: "#ff640a",
        width: 150,
        height: 54,
        fontSize: 25,
        fontWeight: 600,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        top: -30,
    },
});
