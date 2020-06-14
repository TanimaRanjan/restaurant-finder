import React, { useState , useEffect } from 'react'
import { View , Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useBusinesses from '../hooks/useBusinesses'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

    // console.log(props)
    const [ term, setTerm ] = useState('')
   
    // custom hook
    const {results, errorMessage, searchAPI } = useBusinesses() 

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price)
    }    

    return ( 
        <View style={style.viewStyle}>
            <SearchBar  
                onSearchTermChange={(newTerm) => setTerm(newTerm)}
                searchTerm={term} 
                onTermSubmit={() => { searchAPI(term)}}
            />
           
            {errorMessage  ?  <Text>Oh Oh !!! {errorMessage}</Text>: 

            <ScrollView>

                <ResultsList 
                    results={filterResultsByPrice('$')} title='Cost Effective'/>
                
                <ResultsList 
                    results={filterResultsByPrice('$$')} title='Bit Pricier'/>
                
                <ResultsList 
                    results={filterResultsByPrice('$$$$')} title='Big Spender'/>
            </ScrollView>
        }
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        // margin:'10%',
      //   marginHorizontal:20,
        flex:1,
        marginTop:10,
        // borderColor:'red'
        // borderWidth:10
    }, 
    
})

export default SearchScreen