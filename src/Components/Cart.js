import React from 'react';
import { useSelector } from 'react-redux';
import "../App.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  selectCount,
} from '../features/counter/counterSlice';
import { remove } from "../features/counter/counterSlice";
import { useDispatch} from "react-redux";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
  });

  
  const Cart = () => {
    const items = useSelector(selectCount);
    const classes = useStyles();
    const dispatch = useDispatch(useSelector)
    const discount = 0.1;
    let desPrice = 0;
    let tp = 0;
    function totalPrice() {
        {Object.keys(items.cart).map(keyName =>{
            const item = items.cart[keyName];
            tp += +item.price
            
              if (tp <= 700) {
                return tp
              } else {
                return (
                  desPrice = tp - (tp * discount)
                )
              }
              document.getElementById("total").value = desPrice.toFixed(2)

        })}
    }
    totalPrice();

    if (!items)
        return <h2>Product Not Found</h2>

    return (
        <div>
            <h1>My Cart</h1>
            <div className="cartCard">
            <Card className={classes.root} variant="outlined">
      <CardContent>
        
        <Typography variant="h5" component="h2" id="total">
        Items in cart: {items.cart.length}
        <br />
        Total Price: {tp}
        </Typography>
        
        <Typography variant="body2" component="p">
          Happy Shopping
         
        </Typography>
      </CardContent>
    
    
    </Card>
    </div>
            
           {Object.keys(items.cart).map(keyName =>{
               const item = items.cart[keyName];
               return (
                <div className="productc" key={keyName} to={`/Product/${keyName}`}>
                  <h4>{item.name}</h4>
                  <h4>Price: ${item.price}</h4>
                  <img src={item.img} height={150} alt="shoe" />
                  <br />
                  <Button onClick={() => dispatch(remove(item))} color="secondary" >Delete Item</Button>

                </div>
              )
           })}
        </div>
    )
}
export default Cart;


// getPrice = function() {
//   var numVal1 = Number(document.getElementById("price").value);
//   var numVal2 = Number(document.getElementById("discount").value) / 100;
//   var totalValue = numVal1 - (numVal1 * numVal2)
//   document.getElementById("total").value = totalValue.toFixed(2);
// }