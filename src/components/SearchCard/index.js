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
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    align:{
        display: "flex",
        '& > *': {
            alignSelf: "center",
            marginRight: "10px"
        },
    }
}));

function SearchCard(props) {
    const classes = useStyles();
    function onChefClick(){

    }
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
                <CardActionArea 
                href={"/profile/" + props.id}
                // onClick={onChefClick}
                >
                    <CardMedia
                        component="img"
                        alt="chef signiture dish"
                        style={{ maxWidth:"300px", maxHeight: "200px" }}
                        image={props.sigDishImage}
                    />
                    <CardContent className={classes.align}>
                        <Avatar alt="Chef profile pic" src={props.profilePic}/>
                        <Typography variant="h6">{props.first} {props.last}</Typography>
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