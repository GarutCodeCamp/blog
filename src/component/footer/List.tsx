import React from "react";
import { Typography, Box, ListItem, ListItemProps } from '@material-ui/core';

const ListFooter: React.FC = () => {
    const listUseFull = [
        {
            title: 'USEFULL',
            data: [
                {
                    name: 'Ract',
                    link: 'https://reactjs.org/'
                },
                {
                    name: 'Material UI',
                    link: 'https://material-ui.com/'
                },
                {
                    name: 'Firebase',
                    link: 'https://firebase.google.com/'
                }
            ]
        },
        {
            title: 'CONTACT',
            data: [
                {
                    name: 'Ract',
                    link: 'https://reactjs.org/'
                },
                {
                    name: 'Material UI',
                    link: 'https://material-ui.com/'
                },
                {
                    name: 'Firebase',
                    link: 'https://firebase.google.com/'
                }
            ]
        },
        {
            title: 'CONTACT',
            data: [
                {
                    name: 'Ract',
                    link: 'https://reactjs.org/'
                },
                {
                    name: 'Material UI',
                    link: 'https://material-ui.com/'
                },
                {
                    name: 'Firebase',
                    link: 'https://firebase.google.com/'
                }
            ]
        }
    ]
    return (
        <Box display='flex' paddingY={3} justifyContent="space-around" >
            {listUseFull.map((name,id)=>{
                const {data} = name
                return(
                    <Typography key={id} variant="h6">
                        {name.title}
                        {data.map((data,id)=> {
                            return (
                                <ListItemLink key={id} href={data.link}>
                                    <Typography variant="caption">
                                        {data.name}
                                    </Typography>
                                </ListItemLink>
                            )
                        })}
                    </Typography>
                )
            })}
        </Box>
    )
}

const ListItemLink = (props: ListItemProps<'a', { button?: true }>): any => (
    <ListItem button component="a" {...props} />
)
export {ListFooter, ListItemLink};

