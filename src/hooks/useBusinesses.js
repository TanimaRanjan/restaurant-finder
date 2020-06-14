import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {

    const [ results, setResults ] = useState([])
    const [ errorMessage , setErrorMessage ] = useState('')

    const searchAPI = async (searchTerm) => {
        try {
            const result = await yelp.get('/search', {
                params: {
                    limit:50,
                    term:searchTerm, 
                    location:'new york'
                }
            })
            setResults(result.data.businesses)
            setErrorMessage('')
        } catch (error) {
            console.log(error)
            setErrorMessage('Something went wrong !!! ')
        }
    }

    useEffect(() => {
        searchAPI('')
    }, [])


    return { 
        results, 
        errorMessage, 
        searchAPI
    }
}