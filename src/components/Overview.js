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
        marginTop: 30,
        marginBottom: 50,
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
                    <Grid item zeroMinWidth>
                    <CssBaseline />
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ backgroundColor: 'rgb(178, 223, 219)', height: '20vh', width: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                            <PlayCircleFilledWhiteIcon style={{ color: 'white', fontSize: 40, cursor: 'pointer' }} />
                        </Typography>
                    </Container>
                    </Grid>
                    <Grid xs={12} sm container>
                        <Grid xs container direction="column" alignItems="flex-start" justify="space-around" spacing={2} >

                            <Grid item>
                                <Typography variant="h4">
                                    Features
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-start'>
                                <Typography variant="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis pretium dolor, id tincidunt nunc.
                                </Typography>
                            </Grid>
                            <Grid container justify='center'>
                                <Typography variant="p" style={{ cursor: 'pointer', color: 'rgba(0,187,211)', fontWeight: 900, textAlign: 'center' }}>
                                    READ OUR FEATURES
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            
            <Paper className={classes.paper} square>
                <Grid container>
                    
                </Grid>
                <Grid item>
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                </Grid>
            </Paper>
        </div>
    )
}

export default Overview
