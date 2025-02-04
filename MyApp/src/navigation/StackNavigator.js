import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const isLoggedIn = true;
  return (
    <Stack.Navigator
      // initialRouteName = ""
          screenOptions ={{
        //   headerShown: false,
          }}>
          {isLoggedIn ? (
              <Stack.Screen
                  name="Home"
                  component={BottomTabNavigator}
              />
          ) : (
                  <>
                      <Stack.Screen
                          name="Login"
                          component={LoginScreen}
                      />
                      <Stack.Screen
                          name="Signup"
                          component={SignupScreen}
                      />
                  </>
          
          )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
