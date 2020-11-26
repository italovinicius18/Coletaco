import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: '100%'
    },
    calloutPadrao: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 15,
        borderWidth: 0.5,
        padding: 15,
        width: 250,
        height: 110,
    },
    fonteCallout: {
        fontSize: 40,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    fonteDescricao: {
        fontSize: 10,
        marginBottom: 0,
        marginTop: 'auto',
        marginLeft: 0,
        marginRight: 'auto'
    },
    imagemPapel: {
        width: 90,
        height: 80,
        backgroundColor: '#48ACF0',
        borderRadius: 15,
        marginLeft: 0,
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 10
    },
    imagemMetal: {
        width: 80,
        height: 80,
        backgroundColor: '#F1F312',
        borderRadius: 15,
        marginLeft: 0,
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 10
    },
    imagemPlastico: {
        width: 80,
        height: 80,
        backgroundColor: '#E53D00',
        borderRadius: 15,
        marginLeft: 0,
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 10
    },
    imagemVidro: {
        width: 80,
        height: 80,
        backgroundColor: '#08C49B',
        borderRadius: 15,
        marginLeft: 0,
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 10
    },

});