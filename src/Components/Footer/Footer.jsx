import React, {Component} from "react";
import {Paper, Grid} from "@material-ui/core";


class Footer extends Component {
    render() {
        return (
            <Paper>
                <Grid container justify='space-around'  alignContent='center' alignItems="center" >
                    <Grid item >
                        <div>Version 1.0.0</div>
                    </Grid>
                    <Grid item >
                        <a href="https://github.com/Planime/">About</a>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}


export default Footer