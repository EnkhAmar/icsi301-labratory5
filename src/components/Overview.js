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
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
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

const smallAvatar = (
    <Grid container style={{ margin: 20 }}>
    <Grid item>
        <div style={{ background: "rgb(94,53,177)", borderRadius: "50%", width: "60px", height: "60px" }}></div>
    </Grid>
    <Grid xs={12} sm container>
        <Grid xd container direction="column" style={{ marginLeft: 60,  marginRight: 80 }}>
            <Grid item>
                <Typography variant="body1" style={{ color: 'rgb(97,97,97)', fontWeight: 600, textAlign: 'left' }}>  
                    Lorem ipsum dolor sit amet
                </Typography>
            </Grid>
            <Grid container justify="flex-start">
                <Typography variant="caption" style={{ color: 'rgb(97,97,97)', textAlign: 'left' }}>
                    Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <span style={{ color: '#FF4081', fontWeight: 600 }}>proident minim</span>.
                    <Divider />
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    </Grid>
)


function Overview() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3} square >
                <Grid container>
                    <Grid item zeroMinWidth>
                        <CssBaseline />
                        <Container maxWidth="sm">
                            <Typography component="div" style={{ backgroundColor: 'rgb(178, 223, 219)', height: '25vh', width: '25vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: -24 }} >
                                <PlayCircleFilledWhiteIcon style={{ color: 'white', fontSize: 40, cursor: 'pointer' }} />
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid xs={12} sm container>
                        <Grid xs container direction="column" alignItems="flex-start" justify="space-around" spacing={2} >

                            <Grid item>
                                <Typography variant="h5" style={{ color: 'rgb(97,97,97)' }}>
                                    Features
                                </Typography>
                            </Grid>
                            <Grid container justify='flex-start'>
                                <Typography variant="body2" style={{ color: 'rgb(97,97,97)', textAlign: 'left' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis pretium dolor, id tincidunt nunc.
                                </Typography>
                            </Grid>
                            <Grid container justify='center'>
                                <Typography variant="body1" style={{ cursor: 'pointer', color: 'rgb(0,187,211)', fontWeight: 200, textAlign: 'center' }}>
                                    <Divider variant="fullWidth" />
                                    READ OUR FEATURES
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

            <Paper className={classes.paper} square>
                <Grid container>
                    <Grid item xs style={{ padding: 15 }}>
                        <Grid container justify="space-between">
                            <Typography variant="h5" style={{ color: 'rgb(97,97,97)', textAlign: 'left', }}>
                                Details
                            </Typography>
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container direction="column">
                            {smallAvatar}
                            {smallAvatar}
                            {smallAvatar}
                        </Grid>
                    </Grid>
                </Grid>
                        
            </Paper>
        </div>
    )
}

export default Overview
