
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

import { Link } from 'react-router-dom';



export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton  aria-label="Menu" color="inherit">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">Find City Temperature</Link>
                        <Link to="/FirstComponent"> London </Link>
                        <Link to="/SecondComponent"> Paris </Link>
                        < Link to= "/ThirdComponent"> Berlin </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}
