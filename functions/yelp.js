const axios = require('axios');

exports.handler = async (event) => {
    const location = event.queryStringParameters.location || "92688"
    const term = event.queryStringParameters.term || "greek"

    console.log(location)
    console.log(term)
    const response = await axios({
        method: 'get',
        url: `https://api.yelp.com/v3/businesses/search`,
        params: {
            limit: 50,
            term: term,
            location: location
        },
        headers : {
            Authorization: 'Bearer VBKLWtzb81luXk2xw7x0nPG799WOM1ZxcCZlTTsarxS2GOsTAJ10if1ghlpGmDZWckugJZLVJD8MvAi230oIXIuYK54NgMPHS8rmkqKcLacGCYfd0aEx0H68Gt24YnYx', 
        }
    })
    console.log("in api after call")
    const data = response.data
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}