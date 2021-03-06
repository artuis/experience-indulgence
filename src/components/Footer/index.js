// React
import React, { useState, useEffect } from "react";
// Styles
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Container from '@material-ui/core/Container';
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
        container:{
                padding: "60px 0 120px 0"
        },
        contrast:{
            paddingLeft: "0"
        },
        font:{
            fontFamily: "'Italianno', cursive",
            fontSize: "3em"
        }
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function Feature() {
        const classes = useStyles();
	return (
        <Box color="primary">
            <Container maxWidth="lg">
                    <Grid container spacing={1} className={classes.container}>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Typography className={classes.font} variant="h4">
                                    Indulge
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Typography variant="h6">
                                    Chef
                                </Typography>
                                <List>
                                    <ListItemLink className={classes.contrast} href="/">
                                        <ListItemText primary="Home" />
                                    </ListItemLink>
                                    <ListItemLink className={classes.contrast} href="/search">
                                        <ListItemText primary="Search" />
                                    </ListItemLink>
                                    <ListItemLink className={classes.contrast} href="/signup">
                                        <ListItemText primary="Signup" />
                                    </ListItemLink>
                                </List>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Typography variant="h6">
                                    Team
                                </Typography>
                                <List>
                                    <ListItemLink className={classes.contrast} href="https://github.com/mercspring">
                                        <ListItemText primary="Mercury Springberry" />
                                    </ListItemLink>
                                    <ListItemLink className={classes.contrast} href="https://github.com/artuis">
                                        <ListItemText primary="Thomas An" />
                                    </ListItemLink>
                                    <ListItemLink className={classes.contrast} href="https://github.com/magedabdelsalam">
                                        <ListItemText primary="Maged Abdelsalam" />
                                    </ListItemLink>
                                    <ListItemLink className={classes.contrast} href="https://github.com/devtown425">
                                        <ListItemText primary="Hao Guan" />
                                    </ListItemLink>
                                    <ListItemLink className={classes.contrast} href="https://github.com/ScottDancer">
                                        <ListItemText primary="Scott Dancer" />
                                    </ListItemLink>
                                </List>
                            </Grid>
                    </Grid>
            </Container>
        </Box>
	);
}

export default Feature;