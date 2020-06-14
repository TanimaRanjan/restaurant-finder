import axios from 'axios'
import {api_key} from '../config/config'

const yelpURL='https://api.yelp.com/v3/businesses'
const search='/search'
const detail='/{id}'
const review = '/businesses/{id}/reviews'

// term // location // latitude // longitude // radius
// categories // locale // limit // offset // sort_by
// price // open_now // open_at // attributes
export default axios.create({
    baseURL:yelpURL,
    headers: {
        Authorization: `Bearer ${api_key}`
    }
})
