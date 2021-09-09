import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        appbar: {
            background: '#053742'
        },
        box: {
            listStyle: 'none',
            color: '#E8F0F2',
            fontWeight: 500,
            cursor: 'pointer',  
        },
        logoBtn: {
            marginRight: theme.spacing(2),
            flexGrow: 1,
            color: '#E8F0F2',
            fontWeight: 500
        }
    })
);

export default useStyles;
