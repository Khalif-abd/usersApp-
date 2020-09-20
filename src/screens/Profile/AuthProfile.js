import React from 'react';
import {View,Text,Button} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ExitProfile} from "../../redux/action";

function AuthProfile({navigation}) {
    const Dispatch = useDispatch();

    return (
        <View>
            <Text>
                Профиль пользователя!
            </Text>
            <Button title='Выход' onPress={()=>Dispatch(ExitProfile())} />
        </View>
    );
}
export default AuthProfile;