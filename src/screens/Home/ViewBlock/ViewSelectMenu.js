import React from 'react';
import {
    View,Button
} from "react-native";


function ViewSelectMenu({navigation}) {

    return (
        <View  style={{height:'99%'}}>
            <Button title='Салоны' onPress={()=>navigation.navigate('ViewHomeScreen', {
                type:3
            })}/>
            <Button title='Барберы'  onPress={()=>navigation.navigate('ViewHomeScreen', {
                type:1
            })}/>
            <Button title='Парикмахерские' onPress={()=>navigation.navigate('ViewHomeScreen', {
                type:2
            })}/>
        </View>
    );

}
export default ViewSelectMenu;