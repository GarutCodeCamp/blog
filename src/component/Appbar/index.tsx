import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles';
import '../../assets/css/global.css'

const TransBar: React.FC = () => {
    const classes = useStyles()
    return(
        <AppBar color="transparent" className={classes.appbar}>
            <Toolbar>
                <Typography variant="h6" className={classes.logoBtn}>Untitled</Typography>
                <Box className={classes.box} alignItems="center" display="flex">
                    <Box marginRight={3}>Home</Box>
                    <Box marginRight={3}>Portfolio</Box>
                    <Box className="btn-rounded" marginRight={2}>Sign Up</Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default TransBar;