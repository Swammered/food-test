import React from "react"
import { Grid, Typography,  Card, CardContent,CardMedia, CardActions, Button  } from "@mui/material"
import {useNavigate} from 'react-router-dom';

const SearchResults = ({searchTerm, resultList,  setRestaurantId }) => {
    //console.log("resultList",resultList)
    let navigate = useNavigate();

    const goToDetails = (restaurantId) => {
        setRestaurantId(restaurantId)
        navigate("/detail");
    }

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
                            {/* <Card>
                                <CardContent>
                                    <Typography variant='h5'>{value.name}</Typography>
                                </CardContent>
                            </Card> */}
                            <Card sx={{ maxWidth: 345 }}>
                                
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={value.image_url}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                    {value.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {value.location.address1} <br/>
                                        {value.location.city}, {value.location.state} <br/> <br/>
                                        Rating: {value.rating} ({value.review_count})
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <Button size="small" onClick={(e) => goToDetails(value.id)}>Details</Button>
                                    </CardActions>
                                
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