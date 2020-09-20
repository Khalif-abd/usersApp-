import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {View, ActivityIndicator, FlatList, SafeAreaView, Text} from "react-native";
import {GetSalons} from "../../../redux/action";
import {ShowSalon} from '../../Modules'

function ViewHomeScreen({navigation}) {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GetSalons());
    },[dispatch])
    
    const data = useSelector(state=>state.LoadSalons.data)
    const showLoad = useSelector(state=>state.LoadSalons.loading)

    const renderItem = ({ item  }) => (
        <ShowSalon {...item} nav={navigation}/>
    );

    const getHeader = () => {
        return <Text>{'My Title'}</Text>;
    };

    const getFooter = () => {
        return <Text>{'Loading...'}</Text>;
    };

    return (
            <View  style={{height:'99%'}}>
                <SafeAreaView >

                    {showLoad?
                        <ActivityIndicator style={{marginTop:15}}/> :
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            // ListHeaderComponent={getHeader}
                            // ListFooterComponent={getFooter}
                        />
                    }
                </SafeAreaView>
            </View>
    );

}
export default ViewHomeScreen;