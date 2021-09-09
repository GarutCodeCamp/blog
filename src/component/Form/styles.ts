import {makeStyles, createStyles} from '@material-ui/styles'

const useStyles = makeStyles(()=> createStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#39A2DB',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
    },
    boxContainer: {
        background: 'linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.12), rgba(255,255,255,0.3))',
        width: '40%',
        height: '70%',
        boxShadow: '0px 1px 9px 1px #A2DBFA',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 'auto',
        position: 'relative'
    },
    input: {
        border: 'none',
        fontSize: 19,
        padding: '5px 0px',
        cursor: 'pointer',
        textAlign: 'center',
        outline: 'none',
        borderRadius: 10
    },
    btnRounded: {
        margin: '10px 0',
        fontSize: 17,
        textTransform: 'uppercase',
        padding: '7px 0',
        borderRadius: 10,
        border: 'none',
        outline: 'none',
        cursor:'pointer',
        color: '#E8F0F2',
        background: '#053742'
    }
}))

export default useStyles;