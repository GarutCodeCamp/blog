import React from "react";
import { Typography, Box, Container, ListItemIcon } from "@material-ui/core";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";
import useStyles from "./styles";
import { ListFooter, ListItemLink } from "./List";

const Footer: React.FC = () => {
  const listSocial = [
    {
      icon: <Email />,
      link: "ahmadjuna391@gmail.com",
      name: "Ahmad Junaedi",
    },
    {
      icon: <GitHub />,
      link: "https://github.com/GarutCodeCamp",
      name: "GarutCodeCamp",
    },
    {
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/ahmad-junaedi-a56a2b1b4/",
      name: "Ahmad Junaedi",
    },
  ];
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <Box
          borderBottom={1}
          display="flex"
          justifyContent="space-between"
          alignContent="center"
          paddingY={3}
        >
          <Typography variant="h6">
            Get connected with us on social networks:
          </Typography>
          <Box justifyContent="flex-end">
            {listSocial.map((data, idx) => {
              return (
                <ListItemLink key={idx} href={data.link}>
                  <ListItemIcon key={idx} className={classes.icons}>
                    {data.icon}
                  </ListItemIcon>
                  {data.name}
                </ListItemLink>
              );
            })}
          </Box>
        </Box>
        <ListFooter />
        <Box textAlign="center" paddingY={3}>
          © 2021 Copyright: ahmadjuna@gmail.com
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
