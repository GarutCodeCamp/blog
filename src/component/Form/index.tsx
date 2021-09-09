import React from 'react';
import welcome from '../../assets/img/svg/welcome.svg';
import { Box, Link } from '@material-ui/core';
// import {Link} from 'react-router-dom';
import useStyles from './styles';

interface Props{
    postUser: any;
    setPostUser: any;
    submitted: any; 
}

const Form: React.FC<Props> = ({postUser,setPostUser,submitted}: Props) => {
    const classes = useStyles();
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setPostUser({...postUser, [name]: value})
    }
    return(
        <div className={classes.root}>
            <form className={classes.boxContainer}>
                <Box display="flex" justifyContent="center" top={0} left={0} right={0} marginBottom={2} position='absolute'>
                    <img src={welcome}  />
                </Box>
                <Box position='relative' display="flex" justifyContent="center" bottom={0} margin={'auto'} flexDirection="column">
                    <Box marginTop={10}>
                        <input className={classes.input} name="email" value={postUser.email} onChange={handleChange} type="text" placeholder="Email" />
                    </Box>
                    <Box marginTop={2}>
                        <input className={classes.input} name="password" type="password" value={postUser.password} onChange={handleChange} placeholder="Password" />
                    </Box>
                    <button onClick={submitted} className={classes.btnRounded}>Register</button>
                    <Box marginTop={2}>
                        If You have Account Click <Link>SIGN IN</Link> 
                    </Box>
                </Box>
            </form>
        </div>
    )
}

export default Form;