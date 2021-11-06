import { Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import React from "react";

const SideBar = () => {
    return (
        <Grid item md={2} sx={{ minWidth: 0 }}>
            
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: '#f9f9f9',
                  }}
            >

                <ListItem button>
                    <ListItemAvatar>
                        <PeopleIcon />
                    </ListItemAvatar>
                    <ListItemText primary="Texto 1" secondary="texto2"/>
                </ListItem>

            </List>

        </Grid>
    );
}

export default SideBar;