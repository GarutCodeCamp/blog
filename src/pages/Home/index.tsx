import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import homeImg from '../../assets/img/svg/home.svg';
import bg from '../../assets/img/svg/blob.svg';
import { Box, Container, Typography } from '@material-ui/core';
import TransBar from '../../component/Appbar';
import Footer from '../../component/footer';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
            background: '#38A3A5',
        },
        content: {
            flexGrow: 1,
            color: 'rgba(255,255,255,0.9)'
        },
        text: {
            textIndent: '45px',
            lineHeight: 1.9
        }
    })
);

const Home = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <TransBar />
        <Container className={classes.content}>
            <Box display="flex" justifyContent='space-between' alignContent='center'>
                <Box  alignSelf="center" lineHeight={2}>
                    <Typography variant="h3">
                        Write Your History ?    
                    </Typography>
                    <Typography className={classes.text} paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Adipisci assumenda aliquam sint. Perferendis necessitatibus,
                        dignissimos quibusdam molestias impedit dolorem aperiam repudiandae autem,
                        quas vitae cupiditate, quisquam consequuntur corporis vero voluptatem.
                    </Typography>
                </Box>
                <img src={homeImg} alt="typing"/>
            </Box>     
        </Container>
        <Footer />
    </div>
    );
}

export default Home;
