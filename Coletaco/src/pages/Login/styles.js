import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    viewColetacoText: {
        flex: 4,
        justifyContent: "flex-end",
    },
    logo: {
        alignSelf: "center",
    },
    coletacoText: {
        paddingTop: "5%",
        fontFamily: "Montserrat_800ExtraBold",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 36,
        lineHeight: 40,
        textAlign: "center",
        color: "#000000",
        margin: 2
    },
    viewFormularioInfos: {
        flex: 4,
        paddingHorizontal: "8%",
    },
    inputEmail: {
        marginVertical: "4%",
        paddingHorizontal: 20,
        paddingVertical: "3%",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#18191F",
        borderStyle: "solid",
        fontFamily: "Montserrat_500Medium",
        fontSize: 21,
        fontStyle: "normal",
        color: "#474A57",
    },
    inputSenha: { 
        marginVertical: "4%",
        paddingHorizontal: 20,
        paddingVertical: "3%",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#18191F",
        borderStyle: "solid",
        fontFamily: "Montserrat_500Medium",
        fontSize: 21,
        fontStyle: "normal",
        color: "#474A57",
    },
    botaoLogin: {
        marginVertical: "15%",
        paddingHorizontal: '4%',
        paddingVertical: "3%",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#18191F",
        borderStyle: "solid",
        backgroundColor: "#69D669",
        alignItems: "center",
    },
    botaoLoginText: {
        fontFamily: "Montserrat_800ExtraBold",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 21,
        color: "white",
    },
    viewCadastre: {
        flex: 2,
    },
    textCadastre: {
        fontFamily: "Montserrat_500Medium",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 13,
        textAlign: "center",
    },
    linkCadastro: {
        fontFamily: "Montserrat_800ExtraBold",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 13,
        color: "#F95A2C",
    }
});