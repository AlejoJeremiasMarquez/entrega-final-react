import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.img}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <Link to={`/detail/${product.id}`} className="btn btn-primary">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
