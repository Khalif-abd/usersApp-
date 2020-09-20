import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {useSelector} from "react-redux";
import LogInProfile from "./LogInProfile";
import AuthProfile from "./AuthProfile";
const Stack = createStackNavigator();

function ProfileScreen() {

    const Auth = useSelector(state=>state.Auth.access);

    // useEffect(()=>{
    //     console.log(12)
    // },[Auth])

    return (
        <Stack.Navigator >
            {
                !Auth?
                <Stack.Screen name="LogIn" component={LogInProfile} options={{title:'Вход'}} /> :
                <Stack.Screen name="Profile" component={AuthProfile} options={{title:'Профиль'}} />
            }


        </Stack.Navigator>
    );
}

export default ProfileScreen;