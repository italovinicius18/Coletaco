import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: 100,
        height: 40
    },
    coletacoText: {
        fontWeight: "bold"
    },
    inputEmail: { 
        paddingHorizontal: '4%',
        paddingVertical: "4%",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#18191F",
        borderStyle: "solid",
        // fontFamily: "Montserrat_500Medium",
        fontSize: 21,
        fontStyle: "normal",
        color: "#474A57",
        marginBottom: 20,
        width: 200

    },
    inputSenha: { 
        paddingHorizontal: '4%',
        paddingVertical: "4%",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#18191F",
        borderStyle: "solid",
        // fontFamily: "Montserrat_500Medium",
        fontSize: 21,
        fontStyle: "normal",
        color: "#474A57",
        width: 200

    }
});