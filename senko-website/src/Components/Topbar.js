import React from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';

const Topbar = () => {
    function _home(){
        console.log("HOME")
    };
    function _work(){
        console.log("WORK")
    };
    function _about(){
        console.log("ABOUT")
    };

    return (
        <div>
            <AppBar position="static" style={{
                backgroundColor: "#4a4c55",
            }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" disableTouchRipple="false" disableFocusRipple="false" disableRipple="false">
                        Senko's Portfolio
                    </IconButton>

                    <Button color="inherit" onClick={_home}>Home</Button>
                    <Button color="inherit" onClick={_work}>Work</Button>
                    <Button color="inherit" onClick={_about}>About Me</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Topbar
