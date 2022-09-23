import React from "react"
import { Grid, Typography, Button, Card, CardContent  } from "@mui/material"

const SearchResults = ({searchTerm, resultList}) => {
    console.log("resultList",resultList)

    return (
        <>
        
        <Grid sx={{pl:2, pr:2}} spacing={2} container>
            {
                (resultList.length > 0) ? (
                    <Grid sx={{mt:2}}  xs={12} item><Typography variant="h4">{searchTerm}</Typography></Grid>
                ) : (
                    <></>
                )
            }
             
            {
                resultList.map( (value, index) => {
                    return (
                        <Grid key={index} xs={6} lg={2}  item>
                            <Card>
                                <CardContent>
                                    <Typography variant='h5'>{value.name}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
        
        </>

    )

}

export default SearchResults