import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../screens/Welcome';
import Demo from '../../screens/Demo';
import Login from '../../screens/Login';
                                                                                                                                                            
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
                <Stack.Screen name="Demo" component={Demo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStackNavigator;
