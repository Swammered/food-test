import React, {useState} from "react"
import { AppBar,  Box, Button, IconButton, Toolbar, Typography, TextField, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import TestGrid from "../pages/TestGrid"
import Search from "../pages/Search"
import MenuIcon from '@mui/icons-material/Menu';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";


const Layout = () => {
    const [layoutMessage, setLayoutMessage] = useState("I am the Layout")
    const [layoutOtherMessage, setLayoutOtherMessage] = useState("I am the other one.")

    return (
        <>
         <BrowserRouter>
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
                    onChange={(e) => {setLayoutMessage(e.target.value)}}
                    onKeyPress={(e) => {
                        if (e.key === "Enter"){
                            setLayoutOtherMessage(e.target.value)
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
            <TextField label="Search" variant="outlined" />
           
                
           
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
    <Toolbar ></Toolbar>
        <Typography variant="h3">{layoutMessage}</Typography>
        <Typography variant="h3">{layoutOtherMessage}</Typography>
        <Routes>
            <Route exact path="/" element={<TestGrid/>} />
            <Route exact path="testgrid" element={<TestGrid/>} />
            <Route exact path="search" element={<Search/>} />
        </Routes>
        </BrowserRouter>
    </>
    )
}

export default Layout