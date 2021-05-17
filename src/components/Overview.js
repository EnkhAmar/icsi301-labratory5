import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 860,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    playSection: {
        maxWidth: 200,
        height: 200,
        display: 'block',
        backgroundColor: '#B2DFDB'
    },
    test: {
        position: 'relative',
        top: 0,
        left: 0,
        backgroundColor: '#B2DFDB',
        height: '100%',
        width: '200px',
    }
}));


function Overview() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3} square >
                <Grid container>
                    <Grid item>
                    <CssBaseline />
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ backgroundColor: 'rgb(178, 223, 219)', height: '20vh', width: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <PlayCircleFilledWhiteIcon style={{ color: 'white', fontSize: 40, cursor: 'pointer' }} />
                        </Typography>
                    </Container>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>

                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    Standard license
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    Remove
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Overview
