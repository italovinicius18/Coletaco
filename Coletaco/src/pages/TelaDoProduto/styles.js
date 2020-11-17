import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
    areaImagem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: "25%",
        margin: "5%",
        //backgroundColor: "white",
    },
    imagemColeta: {
        flex: 1,
        width: "200%",
        paddingVertical: "100%",
        //backgroundColor: "orange",
    },
    areaDescricao: {
        flex: 1,
        marginVertical : '1%',
        marginHorizontal: '10%',
    },
    descricaoColeta: {
        flex: 1,
    },

    areaBotao: {
        flex: 1,
        marginVertical : '1%',
        marginHorizontal: '25%',
    },
    botaoBotao: {
        flex: 1,
        width: "100%",
        marginVertical : '25%',
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        overlayColor: "white",
        borderRadius: 20,
    },
    setColorWhite : {
        color: '#FFFFFF',
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 17,
        fontStyle: "normal",
    },
    setColorBlack : {
        color: '#FFFFFF',
        fontFamily: "Montserrat_800ExtraBold",
        fontSize: 17,
        color: '#000000'
    }

});