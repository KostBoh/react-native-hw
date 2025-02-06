import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigation/AuthNavigator';
import { useState } from 'react';
import MainNavigation from './src/navigation/MainNavigation';


export default function App() {

  const [isLoggedin, setIsLoggedin] = useState(true);
  
  const onAuthorization = () => {
    setIsLoggedin((prev) => !prev);
  };

  const [fontsLoaded] = useFonts({
  'Roboto-Normal': require('./assets/fonts/Roboto_Condensed-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto_Condensed-Medium.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto_Condensed-Bold.ttf'),
  'Roboto-Light': require('./assets/fonts/Roboto_Condensed-Light.ttf'),
  })

  
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.section}>
        <ActivityIndicator size={'large'}/>
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer>
      {!isLoggedin ? (
        <AuthNavigator authorization={onAuthorization} />
      ) : (
        <MainNavigation authorization={onAuthorization} />
      )}
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
