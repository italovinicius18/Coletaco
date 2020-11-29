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
      alignItems: 'center',
      backgroundColor: 'white',
      justifyContent: 'center',
      borderRadius: 10,
      borderColor: '#ccc',
      borderWidth: 0.5,
      padding: 15,
      width: 150,
    },
    fonteCallout: {
      fontSize: 20,
      fontFamily: 'Montserrat_800ExtraBold',
      fontWeight: '800',
      textAlign: 'center',
    },

});