import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
    },

    areaBotaoVoltar: {
        paddingTop: "8%",
        paddingLeft: "8%",
        paddingBottom: 0,
    },

    botaoVoltar: {
        transform: [{ rotate: "45deg" }],
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
    
    cabecalhoAdicionaColeta: {
        flex: 1,
        marginHorizontal: "1%",
        justifyContent: "center",
        alignItems: 'center',
    },

    areaTituloCategoria: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    tituloCategoria: {
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 17,
        fontStyle: "normal",
        color: "#474A57",
    },

    areaPerguntaCategoria: {
        flex: 3,
        alignItems: "center",
    },

    perguntaCategoria: {
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 34,
        textAlign: "center",
        fontStyle: "normal",
        color: "#18191F",
    },

    areaOpcoesCategorias: {
        flex: 3,
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: "2%",
        marginBottom: "6%",
    },

    imagemColeta: {
        width: '50%',
        height: '50%',
        padding: "100%",
    },

    opcoesCategorias: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: "5%",
        paddingHorizontal: "30%",
        paddingVertical: "10%",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#18191F",
        borderStyle: "solid",
    },

});