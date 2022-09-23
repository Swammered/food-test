import React from "react"
import { Grid, Typography, Button, Card, CardContent } from "@mui/material"
import { Link } from "react-router-dom"

const TestGrid = () => {
    const people = ["Kenny", "Melanie", "James", "Grant", "Eden", "Scooter"]
    return (
        <>
        <Grid spacing={2} container>

            {
                people.map( (value, index) => {
                    return (
                        <Grid key={index} xs={6} lg={2}  item>
                            <Card>
                                <CardContent>
                                    <Typography variant='h3'>{value}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }

                )
            }


 

        </Grid>
        <Button component={Link} to="/search">Search</Button>
        </>
    )
}

export default TestGrid