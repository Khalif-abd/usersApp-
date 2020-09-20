import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabScreen from "./BottomTabScreen";
import ViewSalon from './screens/StackNavigator/ViewSalon'
import ViewMaster from './screens/StackNavigator/ViewMaster'
import getDistance from 'geolib/es/getDistance';
import * as Location from 'expo-location';

const Stack = createStackNavigator();

const dist = getDistance(
    { latitude: 20.0504188, longitude: 64.4139099 },
    { latitude: 51.528308, longitude: -0.3817765 }
);

// console.log(dist/1000)
function StackNavScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }

            let location = await Location.getCurrentPositionAsync({});
            const {latitude, longitude} = location
            setLocation(location);
        })();
    });

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        const {latitude, longitude} = location
        text = JSON.stringify(location);
    }

    console.log(text)

    return (
        <Stack.Navigator >
            <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} options={{
                headerShown:false,
                headerStyle:{
                    backgroundColor:'red'
                }
            }}/>
            <Stack.Screen name="ViewSalon" component={ViewSalon} />
            <Stack.Screen name="ViewMaster" component={ViewMaster} />
        </Stack.Navigator>
    );
}

export default StackNavScreen;