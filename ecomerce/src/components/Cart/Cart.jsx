import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart"
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
    const { cart, getTotal, totalQuantity } = useCart();
    const total = getTotal()

    if(totalQuantity === 0){
        return <h1>No hay items en el carrito</h1>
    }
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <h3 style={{ textAlign: "center" }}>Total: $ {total}</h3>
      <div className="d-flex justify-content-center ">
        <button className="btn btn-secondary">
          Limpiar Carrito
        </button>

        <Link to="/checkout" className="btn btn-success">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart
