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
        marginLeft:20,
        // minWidth:170
    },
    imageStyle: {
        width:170, 
        height:120,
        marginBottom:5
        
    },
    titleStyle: {
        fontSize:18,
        fontWeight:'bold',
        marginBottom:2
    }, 
    subText: {
        color:'grey'
    }
})

export default ResultItem