import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { useEffect } from "react";
import MainNavigation from "./src/navigation/MainNavigation";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./src/redux/store/store";
import { authStateChanged } from "./src/utils/auth";

export default function App() {
  // const [isLoggedin, setIsLoggedin] = useState(true);

  const onAuthorization = () => {
    setIsLoggedin((prev) => !prev);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Normal": require("./assets/fonts/Roboto_Condensed-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto_Condensed-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto_Condensed-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto_Condensed-Light.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.section}>
        <ActivityIndicator size={"large"} />
      </SafeAreaView>
    );
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
      </PersistGate>
    </Provider>
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);

  return (
    <NavigationContainer>
      {user ? (
        <MainNavigation
        // authorization={onAuthorization}
        />
      ) : (
        <AuthNavigator
        // authorization={onAuthorization}
        />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
