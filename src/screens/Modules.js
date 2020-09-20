import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native'
import BlockStyle from './HomeStyle'


export function ShowSalon(props) {
    return (
        <TouchableOpacity
            onPress={()=>{
                props.nav.navigate('ViewSalon', {
                    name:props.name,
                    address:props.address,
                    rating:props.rating,
                    img:props.img })}}>
            <View style={BlockStyle.view} >
                <Image style={BlockStyle.tinyLogo} source={{uri: props.img}}/>
                <Text style={BlockStyle.text}>
                    {props.name}{'\n'}
                    {props.address}{'\n'}
                    Рейтинг: {props.rating}{'\n'}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export function ShowMaster(props) {

    return (
        <TouchableOpacity
            onPress={()=>{
                props.nav.navigate('ViewMaster', {
                    name:props.name,
                    surname:props.surname,
                    rating:props.rating,
                    img:props.img })}}>
            <View style={BlockStyle.view} >
                <Image style={BlockStyle.tinyLogo} source={{uri: props.img}}/>
                <Text style={BlockStyle.text}>
                    {props.name}{props.surname}{'\n'}
                    Рейтинг: {props.rating}{'\n'}
                    Cтатус: {props.status == 1? 'На работе': 'Оффлайн' }{'\n'}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


