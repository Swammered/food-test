import axios from 'axios'

export default async (location, term) => {
    const response = await axios({
        method: 'get',
        url: `https://yelp-backend.netlify.app/.netlify/functions/search?location=${location}&term=${term}`
    })
    return response

                // const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972', {
            //     headers: { 
            //         Authorization: 'Bearer VBKLWtzb81luXk2xw7x0nPG799WOM1ZxcCZlTTsarxS2GOsTAJ10if1ghlpGmDZWckugJZLVJD8MvAi230oIXIuYK54NgMPHS8rmkqKcLacGCYfd0aEx0H68Gt24YnYx', 
            //         Origen : 'localhost',
            //         withCredentials : true,
            //     }
            //   })
             // const response = await axios({
            //     method: 'get',
            //     url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
            //     params: {
            //         limit: 50,
            //         term: searchText,
            //         location: '92688'
            //     },
            //     headers : {
            //         Authorization: 'Bearer VBKLWtzb81luXk2xw7x0nPG799WOM1ZxcCZlTTsarxS2GOsTAJ10if1ghlpGmDZWckugJZLVJD8MvAi230oIXIuYK54NgMPHS8rmkqKcLacGCYfd0aEx0H68Gt24YnYx', 
            //         Origen : 'localhost',
            //         withCredentials : true,
            //     }
            // })

            // const response = await axios({
            //     method: 'get',
            //     url: `https://yelp-backend.netlify.app/.netlify/functions/search?location=92688&term=${searchText}`
            // })
}

           