import React, {Component} from "react";
import {useSelector, useStore} from "react-redux";
import Paper from '@material-ui/core/Paper';


function Header() {

    return (
        <Paper elevation={1}>
            <h1 className="header">Users List</h1>
        </Paper>
    )
}


export default Header