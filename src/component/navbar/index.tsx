/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { CssBaseline, IconButton, useScrollTrigger, Toolbar, AppBar, Slide, Typography, Button, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles'
interface Props {
    window?: () => Window;
    children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
const Navbar = (props: Props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Box display="flex" >                            
                                <li>Home</li>
                                <li>About me</li>
                        </Box>
                        <Button color="inherit" >Sign in</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </React.Fragment>
    );
}

export default Navbar;


