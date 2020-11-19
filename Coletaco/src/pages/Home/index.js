import React from 'react';
import { Text, View, Dimensions} from 'react-native';
import { styles } from './styles';
import MapView, {Marker} from 'react-native-maps';

const Home = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: -15.824997,
          longitude: -47.964539, // Guará +-
          latitudeDelta: 0.461,
          longitudeDelta: 0.2105,
        }}
      >
        <Marker
          coordinate={{
            latitude:-15.8335066,
            longitude:-47.955316,
          }}
          title="Papelão"
          description="Park Shopping"
        />
      </MapView>
    </View>
  );
}

export default Home;