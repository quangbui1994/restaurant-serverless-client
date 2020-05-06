import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const usesStyles = makeStyles({
    root: {
        fontSize: 15,
        fontWeight: 300,
        color: '#868780'
    },
    label: {
        color: '#e67e22'
    },
    focused: {
        color: 'red'
    }
});

function StyledTextField(props) {
    const classes = usesStyles()
    return (
        <TextField 
            {...props} 
            inputProps={{ className: classes.root }}
            InputLabelProps={{ classes: {root: classes.label, focused: classes.focused,notchedOutline: classes.notchedOutline} }}
            InputProps={{ classes: {root: classes.label, focused: classes.focused,notchedOutline: classes.notchedOutline} }}/>
    )
}

export default StyledTextField;