import React from "react"
import { Grid, Typography, Button, Card, CardContent } from "@mui/material"
import { Link } from "react-router-dom"

const TestGrid = () => {
    const people = ["Kenny", "Melanie", "James", "Grant", "Eden", "Scooter"]
    return (
        <>
        <Grid spacing={2} container>

            {
                people.map( (value) => {
                    return (
                        <Grid xs={6} lg={2}  item>
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


          <Grid xs={6} lg={2}  item>
            <Card>
                <CardContent>
                    <Typography variant='h3'>Kenny asdf</Typography>
                </CardContent>
            </Card>
          </Grid>
          <Grid xs={6} lg={2} item>Melanie</Grid>
          <Grid xs={6} lg={2} item>James</Grid>
          <Grid xs={6} lg={2} item>Grant</Grid>
          <Grid xs={6} lg={2} item>Eden</Grid>
          <Grid xs={6} lg={2} item>Scooter</Grid>

        </Grid>
        <Button component={Link} to="/search">Search</Button>
        </>
    )
}

export default TestGrid