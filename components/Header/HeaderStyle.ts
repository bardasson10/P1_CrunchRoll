import { StyleSheet } from "react-native";

export const HeaderStyle = StyleSheet.create({
    header: {
        backgroundColor: "#23252b",
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 2,
    },
    LeftNav: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    RightNav: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
});