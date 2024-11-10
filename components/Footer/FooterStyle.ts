import { StyleSheet } from "react-native";

export const FooterStyle = StyleSheet.create({
    footerContainer: {
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        position: "absolute",
        bottom: 0,
        gap: 1,
        width: "100%",
        fontFamily: "MsTrebuchet",
    },
    footerTextUp: {
        textAlign: "center",
        color: "#a0a0a0",
        fontSize: 15,
    },
    footerTextDown: {
        textAlign: "center",
        color: "#a0a0a0",
        fontSize: 17,

    },
    footerTextD: {
        textAlign: "center",
        color: "#a0a0a0",
        fontSize: 22,
        fontWeight:200

    },
    containerFooterUp:{
        borderBlockEndColor: "#a0a0a0",
        borderBottomWidth: 1,
        padding: 15,
        display: "flex",
        flexDirection: "column",
        gap: 5,
    },
    containerFooterDown:{
        marginTop: 10,
        margin:0,
        display: "flex",
        flexDirection: "column",
        gap: 5,
    },

    dropDown:{
        marginTop: 10,
        backgroundColor: "#000000",
        color: "#a0a0a0",
        transform: [{ translateX: -1 }],
        fontSize: 23,
        width: 150,
        borderColor: "#000000",
    }
});