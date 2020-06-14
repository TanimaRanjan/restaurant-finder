import React, { useState, useEffect } from 'react'

import {View, Image, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'
import { FlatList } from 'react-native-gesture-handler'

const ResultDetailScreen = ({navigation}) => {

    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)

    console.log('RESULT ',result)


    const getRestaurantDetail = async(id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getRestaurantDetail(id)
    }, [])
    
    if(!result) {
        return null
    }
    let { 
        name,
        photos,
        price,
        rating,
        review_count, 
        categories,
        coordinates, 
        display_phone,
        hours,  
        image_url, 
        location,
    } = result

    return (
        <View style={style.viewStyle}>
            {result ? 
                <>
                <Text style={style.titleStyle}>{name} {price}</Text>
                <Image 
                style={style.imageStyle}
                source={{
                    uri: image_url
                }}
            />
            
            <Text style={style.subText}>Phone - {display_phone}</Text>
            <Text style={style.subText}>{rating} Stars, {review_count} Reviews</Text>
                
            <FlatList 
                horizontal
                data={photos}
                keyExtractor={(photo)=> {photo}}
                renderItem={({item}) => {
                   return  <Image 
                    style={style.imageStyle1}
                    source={{
                        uri: item
                    }} />
                }}
                />
            </>


                : null }
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        flex:1,
        margin: 20
    }, 
    imageStyle: {
        width:'60%', 
        height:'40%',
        marginBottom:5
        
    },
    titleStyle: {
        fontSize:18,
        fontWeight:'bold',
        marginBottom:2
    }, 
    subText: {
        color:'grey'
    },
    imageStyle1: {
        width:100,
        height:100,
        margin:5

    }
})

export default ResultDetailScreen