// React
import React from 'react';
// Styles
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

}));

function SearchCard() {
    const classes = useStyles();
    return (
        <Grid item m={4}>
        <Card style={{ maxWidth: "300px" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="chef signiture dish"
                    style={{ width: "300px" }}
                    image="https://static.twentytwowords.com/wp-content/uploads/BadFoodHallOfFame_AD.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={5}>
                            <CardMedia
                                component="img"
                                alt="Chef profile pic"
                                style={{ width: "100px", display: 'inline-block' }}
                                image="https://www.cookingschool.org/img/head-chef.jpeg"
                                title="Contemplative Reptile"
                            />
                        </Grid>
                        <Grid style={{ display: "flex" }} item xs={7} alignItems='center' justify="center">
                            <div className="search-card-name">
                                <span className="search-card-first-name">Maxwell</span>
                                <br />
                                <span className="search-card-last-name">Jones</span>
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
        // <Card>
        //     <CardActionArea>
        //     <CardMedia
        //         component="img"
        //         alt="Contemplative Reptile"
        //         height="140"
        //         image="https://www.cookingschool.org/img/head-chef.jpeg"
        //         title="Contemplative Reptile"
        //     />
        //     <CardContent>
        //         <Typography gutterBottom variant="h5" component="h2">
        //         Lizard
        //         </Typography>
        //         <Typography variant="body2" color="textSecondary" component="p">
        //         Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
        //         across all continents except Antarctica
        //         </Typography>
        //     </CardContent>
        //     </CardActionArea>
        //     <CardActions>
        //     <Button size="small" color="primary">
        //         Share
        //     </Button>
        //     <Button size="small" color="primary">
        //         Learn More
        //     </Button>
        //     </CardActions>
        // </Card>
    )
}

export default SearchCard;