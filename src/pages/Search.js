import React from "react"
import { Grid, Typography, Button, Card, CardContent  } from "@mui/material"
import { Link } from "react-router-dom"

import SearchResults from "../components/searchResults"

const Search = ({searchResults}) => {
    

    const cheapFood = searchResults.filter((value) => value.price === '$')
    const moderateFood = searchResults.filter((value) => value.price === '$$')
    const excpensiveFood = searchResults.filter((value) => value.price === '$$$')
    return (
        <>

        <SearchResults searchTerm={"Cheap Food"} resultList={cheapFood}  />
        <SearchResults searchTerm={"Moderate Food"} resultList={moderateFood}  />
        <SearchResults searchTerm={"Expensive Food"} resultList={excpensiveFood}  />


   
        </>
    )
}

export default Search