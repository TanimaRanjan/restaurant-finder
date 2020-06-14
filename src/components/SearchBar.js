import React from 'react'
import { Octicons } from '@expo/vector-icons'; 
import { View, TextInput, StyleSheet } from 'react-native'

const SearchBar = ({onSearchTermChange, searchTerm, onTermSubmit}) => {

    return (
        <View style={style.viewStyle}>

            <Octicons name="search" style={style.iconStyle} />

            <TextInput
                style={style.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder='Search'
                onChangeText={onSearchTermChange}
                value={searchTerm}
                onEndEditing={onTermSubmit}

            />
        </View>
    )
}

const style = StyleSheet.create({
    inputStyle : {
        fontSize:20,
        flex:9
    },
    viewStyle: {
        backgroundColor:'#DDD',
        height:50,
        // marginHorizontal:20,
        marginBottom:20,
        marginHorizontal:20,
        borderRadius:5,
        // borderWidth:1,
        borderColor:'black',
        flexDirection:'row',
        justifyContent:'space-between',
        // alignContent:'center'
    },
    iconStyle : {
        fontSize:32,
        color:"black" ,
        alignSelf:'center',
        marginHorizontal:15
    }
})


export default SearchBar 