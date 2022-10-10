import React, {useState, useEffect} from "react"
import { AppBar,  Box, Button, IconButton, Toolbar, Typography, TextField, InputAdornment, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

import Search from "../pages/Search"
import MenuIcon from '@mui/icons-material/Menu'
import Detail from "../pages/Detail";
import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom"

import yelp from '../api/yelp'

const Layout = () => {
    const [searchText, setSearchText] = useState("Mexican Food")
    const [results, setResults] = useState([])
    const [restaurantId, setRestaurantId] = useState([])

    const searchApi = async (term) => {

        try {
            //const response = await yelp('92688',term)
            //console.log(response.data.businesses)
            //setResults(response.data.businesses)

            const response2 = await  fetch(`/api/yelp?location=92688&term=${term}`)
            const data = await response2.json()
            console.log(data.businesses)
            setResults(data.businesses)
        } catch {
            console.log('I am in the caught error')
        }
    }

    useEffect(() => {
        //initialize
        searchApi("Mexican Food")
        //console.log("setRestaurantId",setRestaurantId)
    }, []) 

    const doSearch = (e) => {
        setSearchText(e.target.value)
        searchApi(e.target.value)
    }


    return (
        <>
         <BrowserRouter>
         <Paper sx={{backgroundColor:'#eeeeee'}}>
        <Box sx={{ flexGrow: 1, alignContent: "center", alignItems: "center", justifyContent:"center"  }}>
        <AppBar position="fixed">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignContent: "center", alignItems: "center", justifyContent:"center" }}>
                <TextField
                    
                    onKeyPress={(e) => {
                        if (e.key === "Enter"){
                            doSearch(e)
                        }
                    }}
                    
                    label="Search"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                    ),
                    }}
                    variant="outlined"
                />
                
                
            </Typography>
           
           
                
           
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
    <Toolbar ></Toolbar>
        <Typography>Your search results for: {searchText}</Typography>
        <Routes>
            <Route exact path="/" element={<Search searchResults={results} setRestaurantId={setRestaurantId}/>} />
            <Route exact path="search" element={<Search searchResults={results} setRestaurantId={setRestaurantId}/>} />
            <Route exact path="detail" element={<Detail searchResults={results} restaurantId={restaurantId}/>} />
        </Routes>
        </Paper>
        </BrowserRouter>
    </>
    )
}

export default Layout