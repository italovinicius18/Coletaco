import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#69D669',
    },

    areaBotaoVoltar: {
        paddingTop: "8%",
        paddingLeft: "8%",
        paddingBottom: 0,
    },

    botaoVoltar: {
        width: 50,
        height: 50,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#000",
        borderStyle: "solid",
        paddingVertical: "3%",
        shadowColor: "#18191F",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },

    imagemPerfil: {
        alignSelf: 'center',
        paddingVertical: 1,
    },

    fundoNome: {
        paddingVertical: "3%",
        backgroundColor: '#18191F',
    },

    nome: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 36,
        alignSelf: 'center',
    },

    status: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 17,
        alignSelf: 'center',
    },


    tituloPendente: {
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 25,
    },

    tituloColetado: {
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 25,
    },

    areaListaPendentes: {
        flex: 1,
        padding: 2,
        backgroundColor: "white",
    },

    areaListaColetados: {
        flex: 1,
        padding: 2,
        backgroundColor: "white",
    },

    itemColeta: {
        flex: 1,
        marginVertical: "2%",
        marginHorizontal: "6%",
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#000",
        borderStyle: "solid",
        paddingVertical: "3%",
    },

    dadosColeta: {
        flex: 3,
        paddingHorizontal: "5%",
    },

    areaTituloDadosColeta: {
        paddingVertical: "1%",
    },

    tituloDadosColeta: {
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 21,
    },

    descricaoDadosNome: {
        fontFamily: "Montserrat_400Regular",
        fontSize: 12,
        fontWeight: "700",
    },

    areaImagemPerfil: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        left: '30%',
    },

    imagemListaPerfil: {
        width: '80%',
        height: '110%',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#18191F",
        borderStyle: "solid",
    },

});