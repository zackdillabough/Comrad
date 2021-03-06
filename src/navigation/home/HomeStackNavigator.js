import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../screens/Welcome';
import Login from '../../screens/Login';
import CreateRoom from '../../screens/CreateRoom';
import NewRoom from '../../screens/NewRoom';
                                                                                                                                                            
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    const options = {
        headerShown: false
    };

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={options}
                />
                <Stack.Screen 
                    name="Welcome" 
                    component={Welcome} 
                    options={options}
                />
                <Stack.Screen 
                    name="CreateRoom" 
                    component={CreateRoom} 
                    options={options}
                />
                <Stack.Screen 
                    name="NewRoom" 
                    component={NewRoom} 
                    options={options}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStackNavigator;
