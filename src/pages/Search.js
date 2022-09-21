import React from "react"
import { Grid, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

const Search = () => {
    return (
        <>
        <Grid spacing={2} container>
          <Grid xs={6} lg={2}  item><Typography variant='h3'>Search Page</Typography></Grid>
          <Grid xs={6} lg={2} item>Melanie</Grid>
          <Grid xs={6} lg={2} item>James</Grid>


        </Grid>
        <Button component={Link} to="/testgrid">Test Grid</Button>
        </>
    )
}

export default Search