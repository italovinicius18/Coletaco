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
    },

    fundo: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // borderRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderWidth: 4,
        borderColor: "#000",
    },

    linha: {
        width: 60,
        alignSelf: 'center',
        backgroundColor: '#000000',
        borderRadius: 30,
        borderWidth: 4,
        borderColor: "#000",
        top: '5%',
    },

    status: {
        color: '#00C6AE',
        fontFamily: 'Montserrat_500Medium',
        fontSize: 17,
        left: '4.5%',
        top: '10%',
    },

    nome: {
        color: '#000000',
        fontFamily: 'Montserrat_800ExtraBold',
        fontSize: 36,
        left: '3%',
        top: '9%',
    },

});