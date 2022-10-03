import React from "react"
import { Grid, Typography, Button, Card, CardContent  } from "@mui/material"
import { Link } from "react-router-dom"

import SearchResults from "../components/searchResults"

const Detail = ({searchResults, restaurantId}) => {
    

    const cheapFood = searchResults.filter((value) => value.price === '$')

    return (
        <>

            <Typography>Details: {restaurantId}</Typography>

   
        </>
    )
}

export default Detail