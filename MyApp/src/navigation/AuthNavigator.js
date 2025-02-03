import {createStackNavigator} from "@react-navigation/stack"
import LoginScreen from "../screens/LoginScreen";
import LogoutIcon from "../../icons/LogoutIcon";
import SignupScreen from "../screens/SignupScreen";


const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            // screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: "First screen",
                    headerRightContainerStyle:{paddingRight:16},
                    headerRight: () => (
                        <LogoutIcon/>
                    )
                }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                    title:"Second screen",
                    presentation: "card"
                }}
            />

        </Stack.Navigator>
    )
}
export default AuthNavigator;