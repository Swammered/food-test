import React from "react"
import {  Typography } from "@mui/material"


const Detail = ({searchResults, restaurantId}) => {
    

    //const cheapFood = searchResults.filter((value) => value.price === '$')

    return (
        <>

            <Typography>Details: {restaurantId}</Typography>

   
        </>
    )
}

export default Detail