import React from 'react'
import NavBar from '../components/ui/NavBar'
import {
    CssBaseline,
    Typography,
    Grid,
    Container,
    makeStyles,
    Button
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    root: {
        minHeight: '100vh',
        background: 'none',
        backgroundColor: '#000',
    },
    page: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        textAlign: 'center',
    }
}))

const Home = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <div className={classes.offset} />
            <div className={classes.page} >
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" gutterBottom
                                style={{ color: '#fff' }}
                            >
                                Album layout
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph
                                style={{ color: '#fff' }}
                            >
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" gutterBottom
                                style={{ color: '#fff' }}
                            >
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Button variant='outlined' color='secondary'>
                                Hello world
                            </Button>
                        </Container>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.page} style={{backgroundColor: 'white'}} >
                <Typography>
                    Hello world
                </Typography>
            </div>
            <div className={classes.page} style={{backgroundColor: 'black'}} >
                <Typography>
                    Hello world
                </Typography>
            </div>
        </div>
    )
}

export default Home
