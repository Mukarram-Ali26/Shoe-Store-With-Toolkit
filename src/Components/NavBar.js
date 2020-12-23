import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  selectCount,
} from '../features/counter/counterSlice';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';


function NavBar() {
  const items = useSelector(selectCount);

  return (
    <div >
      <Link to="/" ><Button color="primary">Home</Button>
      </Link>
      <Link to="/About" ><Button color="primary">About</Button>
      </Link>
      <Link to="/Product" ><Button color="primary">Products</Button>
      </Link>
      <Link to="/Cart" ><ShoppingCartIcon />{items.cart.length}</Link>
    </div>
  );
}

export default NavBar;


