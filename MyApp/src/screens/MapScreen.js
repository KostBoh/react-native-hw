import { useFocusEffect, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/global";

const MapScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container} >
            <Text>Map Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: 'center'
    }
});
export default MapScreen;