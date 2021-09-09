import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => 
createStyles({
        root: {
            flexGrow: 1,
            background: '#053742',
            color: 'white',
        },
        icons: {
            color: 'white',
            display: 'flex'
        }
    }))

export default useStyles;
