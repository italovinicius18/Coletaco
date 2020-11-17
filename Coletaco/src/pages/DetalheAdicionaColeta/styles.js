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

    areaDetalheCategoria: {
        flex: 3,
        alignItems: "center",
        paddingLeft: "8%",
    },

    detalheCategoria: {
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 34,
        textAlign: "left",
        fontStyle: "normal",
        color: "#18191F",
    },

    formularioColeta: {
        flex: 5,
        justifyContent: "space-evenly",
        paddingHorizontal: "8%",
    },

    descricaoColeta: { 
        paddingHorizontal: '4%',
        paddingVertical: "4%",
        borderWidth: 2,
        borderRadius: 16,
        borderColor: "#18191F",
        borderStyle: "solid",
        fontFamily: "Montserrat_500Medium",
        fontSize: 21,
        fontStyle: "normal",
        color: "#474A57",
        
    },

    areaSelecionarMeuLocal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    areaTextoSelecionarMeuLocal: {
        backgroundColor: "white",
    },

    textoPrincipalSelecionarMeuLocal: {
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 18,
        fontStyle: "normal",
        color: "#18191F",
    },

    textoSecundarioSelecionarMeuLocal: {
        fontFamily: "Montserrat_500Medium",
        fontSize: 15,
        fontStyle: "normal",
        color: "#474A57",
    },

    areaCheckboxSelecionarMeuLocal: {
        flex: 2,
    },

});