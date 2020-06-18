import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultItem from './ResultItem'


const ResultsList = ({title, results, navigation}) => {

    if(!results.length) {
        return null
    }

    return (
        <View style={style.viewStyle}>
            <Text style={style.titleStyle}>{title}</Text>
            <FlatList     
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                showsHorizontalScrollIndicator={false}
                renderItem = {({item}) => {
                   return  (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', {id:item.id})}
                        >
                            <ResultItem 
                                title={item.name}
                                image_url={item.image_url}
                                rating={item.rating} 
                                reviews={item.review_count} />

                        </TouchableOpacity>
                    )}}
              />  
        </View>
    )
}




const style = StyleSheet.create({
    titleStyle: {
        // paddingBottom:10,
        fontSize:18,
        fontWeight:'bold',
        marginHorizontal:20,
        marginBottom:5,
        shadowColor:'#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    }
    , 
    viewStyle: {
        marginBottom:15,
        shadowColor:'#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.2
        // marginHorizontal:20,
        // paddingVertical:20
    }
})

export default withNavigation(ResultsList)