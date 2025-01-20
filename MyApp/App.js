import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import RegistrationScreen from './src/screens/RegistrationScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
  'Roboto-Normal': require('./assets/fonts/Roboto_Condensed-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto_Condensed-Medium.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto_Condensed-Bold.ttf'),
  'Roboto-Light': require('./assets/fonts/Roboto_Condensed-Light.ttf'),
  })
  
  if (!fontsLoaded) {
    return (
      <View style={styles.section}>
        <ActivityIndicator size={'large'}/>
      </View>
    )
  }

  return (
    <RegistrationScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
