import React from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native'
import ResultItem from './ResultItem'


const ResultsList = ({title, results }) => {

    return (
        <View style={style.viewStyle}>
            <Text style={style.titleStyle}>{title} - {results.length} </Text>
            <FlatList 
                
                horizontal
                data={results}
                keyExtractor={(result) => result.id}

                renderItem = {({item}) => {
                   return  <ResultItem 
                            title={item.name}
                            image_url={item.image_url}
                            rating={item.rating} 
                            reviews={item.review_count} />
                 }}
              />  
        </View>
    )
}




const style = StyleSheet.create({
    titleStyle: {
        paddingBottom:10,
        fontSize:18,
        fontWeight:'bold'
    }
    , 
    viewStyle: {
        // marginTop:20,
        paddingVertical:20
    }
})

export default ResultsList