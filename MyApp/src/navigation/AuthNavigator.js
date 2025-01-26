import {createStackNavigator} from "@react-navigation/stack"
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LogoutIcon from "../../icons/LogoutIcon";


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
                component={RegistrationScreen}
                options={{
                    title:"Second screen",
                    presentation: 'modal'
                }}
            />

        </Stack.Navigator>
    )
}
export default AuthNavigator;