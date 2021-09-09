import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 700,
    },
    title: {
      marginTop: theme.spacing(2),
    },
  }));

export default function PaymentForm() {
    const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Billing details
      </Typography>
      <ListItem className={classes.listItem}>
            <ListItemText primary="Domain Name registration" secondary="PLace Holder Domain" />
            <Typography variant="body2">0.5 ETH</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary="GAS" secondary="Transaction fee" />
            <Typography variant="body2">0.01 ETH</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            0.51 ETH
          </Typography>
        </ListItem>
         
    </React.Fragment>
    
  );
}