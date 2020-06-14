import React, { useState , useEffect } from 'react'
import { View , Text, TextInput, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useBusinesses from '../hooks/useBusinesses'

const SearchScreen = () => {

    const [ term, setTerm ] = useState('')
   
    // custom hook
    const {results, errorMessage, searchAPI } = useBusinesses() 

    return ( 
        <View>
            <SearchBar  
                onSearchTermChange={(newTerm) => setTerm(newTerm)}
                searchTerm={term} 
                onTermSubmit={() => { searchAPI(term)}}
                />
            <Text>You have {results.length} results </Text>
            {errorMessage  ?  <Text>Oh Oh !!! {errorMessage}</Text>: null}
        </View>
    )
}

const style = StyleSheet.create({
  
})

export default SearchScreen