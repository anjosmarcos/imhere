import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "#131016",
      flex: 1,
      padding: 24
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16,
    },
    input: {
        backgroundColor: '#1F1F25',
        height: 56,
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,

        flex: 1,
        marginRight: 12
    },
    buttonText: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold'
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',

        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    listInput: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
  
  })