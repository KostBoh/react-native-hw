import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

const AuthNavigator = ({ authorization }) => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Register">
        {(props) => (
          <SignupScreen {...props} authorization={authorization} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Login">
        {(props) => <LoginScreen {...props} authorization={authorization} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default AuthNavigator;
