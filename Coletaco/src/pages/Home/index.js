import React from 'react';
import { Text, View, Image} from 'react-native';
import { styles } from './styles';
import MapView, { Marker, Callout } from 'react-native-maps';

const pendentes = [
  { key: '0', produto: 'Latinha', latitude: -15.8335066, longitude: -47.955316, nome: 'Thorin', categoria: 'Metal'},
  { key: '1', produto: 'Papelão', latitude: -15.8335066, longitude: -47.955316, nome: 'Balin', categoria: 'Papel'},
  { key: '2', produto: 'Garrafa de vidro', latitude: -15.8335066, longitude: -47.955316, nome: 'Dwalin', categoria: 'Vidro'},
];

const Home = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -15.824997,
          longitude: -47.964539, // Guará +-
          latitudeDelta: 0.561,
          longitudeDelta: 0.3105,
        }}
      >

        <Marker
          coordinate={{
            latitude:-15.8335066,
            longitude:-47.955316,
          }}
          title="Papelão"
          description="Park Shopping"
        >
          <Callout tooltip 
          onPress={() => console.log("Apertou papel!")}>
            <View>
              <View style={styles.calloutPadrao}>
                <Image 
                  style={styles.imagemPapel}
                  source={require('../../img/caixa.png')}
                >
                </Image>
                <Text style={styles.fonteCallout}>Papel</Text>
                {/*<Text style={styles.fonteDescricao}>Caixas de Papelão</Text>*/}
              </View>
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:-15.9335066,
            longitude:-47.755316,
          }}
        >
          <Callout tooltip 
          onPress={() => console.log("Apertou plástico!")}>
            <View>
              <View style={styles.calloutPadrao}>
                <Image 
                  style={styles.imagemPlastico}
                  source={require('../../img/garrafa_pet.png')}
                >
                </Image>
                <Text style={styles.fonteCallout}>Plástico</Text>
                {/*<Text style={styles.fonteDescricao}>Caixas de Papelão</Text>*/}
              </View>
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:-15.7335066,
            longitude:-47.955316,
          }}
          //icon={require('../../img/caixa.png')}
        >
          <Callout tooltip 
          onPress={() => console.log("Apertou vidro!")}>
            <View>
              <View style={styles.calloutPadrao}>
                <Image 
                  style={styles.imagemVidro}
                  source={require('../../img/garrafa_vidro.png')}
                >
                </Image>
                <Text style={styles.fonteCallout}>Vidro</Text>
                {/*<Text style={styles.fonteDescricao}>Caixas de Papelão</Text>*/}
              </View>
            </View>
          </Callout>
        </Marker>

        <Marker
          coordinate={{
            latitude:-15.9335066,
            longitude:-47.855316,
          }}
          //icon={require('../../img/caixa.png')}
        >
          <Callout tooltip 
          onPress={() => console.log("Apertou metal!")}>
            <View>
              <View style={styles.calloutPadrao}>
                <Image 
                  style={styles.imagemMetal}
                  source={require('../../img/lata.png')}
                >
                </Image>
                <Text style={styles.fonteCallout}>Metal</Text>
                {/*<Text style={styles.fonteDescricao}>Caixas de Papelão</Text>*/}
              </View>
            </View>
          </Callout>
        </Marker>

      </MapView>
    </View>
  );
}

export default Home;