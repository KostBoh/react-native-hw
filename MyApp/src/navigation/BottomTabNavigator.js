import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global';
import MapScreen from '../screens/MapScreen';
import Ionicons from '@expo/vector-icons/Ionicons'
import ProfileScreen from '../screens/ProfileScreen';
import LogoutButton from '../components/LogoutButton';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='Map'
            screenOptions={({ navigation }) => ({
                tabBarLabel: '',
                tabBarStyle: {
                    display: 'flex',
                    // paddingVertical:16,
                },
                tabBarItemStyle: {
                    paddingTop:12
                }
            })}
        >
            <Tab.Screen
                name='Map'
                component={MapScreen}
                options={({ navigation }) => ({
                    title: 'Map',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name='map'
                            size={32}
                            color={focused ? colors.orange : 'black'}
                        /> 
                    ),
                })}
            />

            {/* <Tab.Screen
                name='CreatePostStack'
                component={CreatePostNavigator }
                
            
            
            /> */}




            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={({ navigation }) => ({
                    title: 'Profile',
                    headerRightContainerStyle: { paddingRight: 8 },
                    headerRight: () => (
                        <LogoutButton
                        onPress={()=>console.log('log out')}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name='person'
                            size={32}
                        color={focused ? colors.orange : 'black'}
                        />
                    )
                })}
            
            
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    addButton: {
        width: 70,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.orange,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BottomTabNavigator;