import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";
import "./ItemDetail.css"

const ItemDetail = ({name, img, description, stock, category, id, price}) => {

  const {addItem, isInCart} = useCart();
  const {setNotification} = useNotification()

  const handleAdd = (count) => {
    
    const produtObj = {
      id, name, price, quantity: count
    } 
    addItem(produtObj)
    setNotification("success", `Se agregaron ${count} de ${name}`);
  }
  
  return (
    <article className="articulos">
      <h2>{name}</h2>
      <div className="card">
        <img
          src={`../${img}`}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text"><b>Categoria:</b> {category}</p>
          <h2 className="card-text">Precio: $ {price}</h2>
          <h2 className="card-text">Disponible - {stock}</h2>
        </div>
      </div>

      <div className="container-counter">{
            isInCart(id)  ? (<Link to='/cart'>Finalizar Compra</Link>) 
                          : (<ItemCount stock={stock} onAdd={handleAdd}/>)
            }
      </div>
    </article>
  );
}

export default ItemDetail
