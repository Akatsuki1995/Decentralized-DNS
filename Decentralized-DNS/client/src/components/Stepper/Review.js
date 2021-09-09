import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Badge from "components/Badge/Badge";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

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

export default function Review() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Transaction Details
      </Typography>
      <List disablePadding>
        
          <ListItem className={classes.listItem} >
            <ListItemText primary="Txn Hash"  />
            <Typography variant="body2">0xabd8773f3fa0399314d9258e643b3c504afdd94f3ac</Typography>
          </ListItem>
          <ListItem className={classes.listItem} >
            <ListItemText primary="Timestamp"  />
            <Typography variant="body2">39 secs ago (Jun-10-2020 12:30:35 PM +UTC)</Typography>
          </ListItem>
          <ListItem className={classes.listItem} >
            <ListItemText primary="From" secondary="Sending Address" />
            <Typography variant="body2">0x36d296c355cd98590aa9b362e09b9ccee82206e5</Typography>
          </ListItem>
          <ListItem className={classes.listItem} >
            <ListItemText primary="To" />
            <Typography variant="body2">0x10f4b780040d3b9d95e9cec2cf8e5ca2aafe91ff</Typography>
          </ListItem>
          <ListItem className={classes.listItem} >
            <ListItemText primary="Value" />
            <Typography variant="body2">0.51 ETH</Typography>
          </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Status" secondary="we need 3 confirmations to accept transaction"/>
          <Badge color="warning">1/3 confirmations</Badge>
        </ListItem>
        <CustomLinearProgress
                variant="determinate"
                color="warning"
                value={30}
              />
      </List>
    </React.Fragment>
  );
}