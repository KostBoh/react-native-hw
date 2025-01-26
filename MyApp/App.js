import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigation/AuthNavigator';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';


export default function App() {

  const [fontsLoaded] = useFonts({
  'Roboto-Normal': require('./assets/fonts/Roboto_Condensed-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto_Condensed-Medium.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto_Condensed-Bold.ttf'),
  'Roboto-Light': require('./assets/fonts/Roboto_Condensed-Light.ttf'),
  })

  const isLoggedIn = true;
  
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.section}>
        <ActivityIndicator size={'large'}/>
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <BottomTabNavigator />
      ) : (
          <AuthNavigator/>
      )
      }
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
