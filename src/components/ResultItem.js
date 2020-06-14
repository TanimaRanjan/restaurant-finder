import React from 'react'

import { View, Text, Image, StyleSheet } from 'react-native'

const ResultItem = ({title, image_url, rating, reviews}) => {

    return (
    <View style={style.viewStyle}>
       
        <Image 
            style={style.imageStyle}
            source={{
                uri: image_url
            }}
        />
        <Text style={style.titleStyle}>{title}</Text>
        <Text style={style.subText}>{rating} Stars, {reviews} Reviews</Text>
    </View>)
}

const style = StyleSheet.create({
    viewStyle:{
        // margin:10, 
        minWidth:170
    },
    imageStyle: {
        width:150, 
        height:100,
        
    },
    titleStyle: {
        fontSize:18,
        fontWeight:'bold'
    }, 
    subText: {
        color:'grey'
    }
})

export default ResultItem