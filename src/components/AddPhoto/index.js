// React
import React, { useState } from 'react'
// Styles
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import API from '../../utils/API'
import ChefCard from '../ChefCard';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: "20px"
    }
}));

function EditChefModal(props) {

    const [file, setFile] = useState({});
    const [uploadFlag, setUploadFlag] = useState(false);
    // const [photo, setPhoto] = useState();
    const classes = useStyles();

    function uploadToCloudinary() {
        console.log(file);
        reader(file).then(result => {
            axios.post("https://api.cloudinary.com/v1_1/mercspring/upload", { upload_preset: 'ml_default', file: result })
                .then(result => {
                    console.log(result.data)
                    // setPhoto(result.data.secure_url);
                    API.uploadPhoto({
                        url: result.data.secure_url,
                        title:"photo"
                    }, JSON.parse(localStorage.getItem('userData')).token).then((photoResult)=>{
                        console.log(photoResult);
                        props.setChef({...props.chef, photos:[...props.chef.photos, photoResult.data] });
                    }).catch(err => {
                        console.log(err);
                    })

                })
                .catch(err => {
                    console.log(err);
                })
        })
    }

    const reader = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.readAsDataURL(file);
        });
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Add a Photo
            </Typography>
            <form onSubmit={props.handleFormSubmit}>
                <Grid container spacing={1}>
                    <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
                        <Typography variant="h6">
                            Upload
                        </Typography>
                        <Typography gutterBottom style={!uploadFlag ? {color:"gray"} : {color:"black"}}>{file ? file.name : "No File Selected"}</Typography>
                        <Button className={classes.button} variant="contained" component="label" onChange={(event) => setFile(event.target.files[0])} val={file}>Upload<input type="file" hidden /></Button>
                        <Button className={classes.button} type="submit" variant="contained" color="secondary" onClick={() => uploadToCloudinary(file)}>Save Photo</Button>
                    </Grid>
                    {/* <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
                        <Button className={classes.button} type="submit" variant="contained" color="secondary">Save Changes</Button>
                    </Grid> */}
                </Grid>
            </form>
        </div>
    )
}

export default EditChefModal;