import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/global";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useState } from "react";

const MapScreen = ({ }) => {
    const [markerPosition, setMarkerPosition] = useState(null);

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
        minZoomLevel={11}
        onMapReady={() => console.log("Map is ready")}
              onRegionChange={() => console.log("Region change")}
              onLongPress={(e) => setMarkerPosition(e.nativeEvent.coordinate)}
        
          >
              {/* <Marker
                  coordinate={markerPosition}
                  title="I'm here"
              
              /> */}
        <Marker
          title="I am here"
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          description="Hello"
        />
      </MapView>
    </View>
  );
};

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
export default MapScreen;
