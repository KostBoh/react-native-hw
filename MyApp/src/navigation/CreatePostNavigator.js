import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();

const createPostNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CreatePost"
            screenOptions={({ navigation }) => ({
                headerRightContainerStyle: { paddingRight: 16 },
                headerLeftContainerStyle: { paddingLeft: 16 },
                headerLeft: () => (
                    <BackButton
                    onPress={()=. navigation.goBack()}
                    />
                ).
            }) } 
        >
            <Stack.Screen name="CreatePost" component={CreatePostScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
            
            </Stack.Navigator >

    )
}