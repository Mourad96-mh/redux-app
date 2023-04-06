import classes from './CartButton.module.css';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';


const CartButton = (props) => {

  const totalAmount = useSelector(state => state.cart.totalAmount)

  const dispatch = useDispatch();

  const toggleHandler = ()=> {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
