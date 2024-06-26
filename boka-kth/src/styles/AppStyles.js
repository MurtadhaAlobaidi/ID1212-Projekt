import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 16,
        justifyContent: 'center',
        color: 'blue'
    },
    lightText: {
        color: "#111"
    },
    header: {
        fontSize: 25,
        color: '#111'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 10,
        borderBottomWidth: 2,
        marginVertical: 10
    },
    lightTextInput: {
        borderBottomColor: '#110000'
    },
    darkTextInput: {
        borderBottomColor: "#000000"
    },
    loginButton: {
        backgroundColor: '#3485E2',
        borderColor: '#3485E2'
    },
    roomButton: {
        backgroundColor: '#DFD985',
        borderColor: '#DFD985'
    },
    resetButton: {
        backgroundColor: '#3485E2',
        borderColor: '#3485E2',
    },
    logoutButton: {
        backgroundColor: '#3485E2',
        borderColor: '#3485E2',
    },
    bookingButton: {
        backgroundColor: '#3485E2',
        borderColor: '#1BCD51',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 3
        
    },
    pressedBookingButton: {
        color: "#87F1FF",
        opacity: 0.6
    },
    disabledBookingButton: {
        backgroundColor: '#7D7D7D',
        borderColor: '#1BCD51',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 3
    },
    inlineTextButton: {
        color: "#1B40F7",
        paddingHorizontal: 5,

    },
    pressedInlineTextButton: {
        color: "#87F1FF",
        opacity: 0.6
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        marginVertical: 4,
    },
    rightAligned: {
        justifyContent: "flex-end"
    },
    topMargin: {
        marginTop: 16
    },
    errorMessage: {
        color: "#ff0000"
    }
});