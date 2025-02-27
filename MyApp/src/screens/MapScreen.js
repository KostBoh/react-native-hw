import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/global";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';

const MapScreen = ({ }) => {
  
  const [markerPosition, setMarkerPosition] = useState(null);
  
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={1}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
        onLongPress={(e) => setMarkerPosition(e.nativeEvent.coordinate)}
      >
        
        <Marker
          title="I am here"
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          description="Hello"
          draggable
        />
        {!!location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Hello"
            description='I`m here'
            draggable
          />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
