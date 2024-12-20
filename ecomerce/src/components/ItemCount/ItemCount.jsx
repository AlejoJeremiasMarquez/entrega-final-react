import { useState } from 'react'
import "./ItemCount.css"

function ItemCount({initialValue=1, stock, onAdd}) {
    const [count, setCount] = useState(initialValue);
    

    const decrement = () => {
        if(count>1){
            setCount(count => count - 1)
        }
    }
    const increment = () => {
        if(count < stock){
            setCount((count) => count + 1);
        }
    };

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button className='btn btn-light restar' onClick={decrement}>Decrementa</button>
        <button className='btn btn-primary sumarAlCarrito' onClick={() => onAdd(count)}>Agregar al Carrito</button>
        <button className='btn btn-light sumar' onClick={increment}>Incremento</button>
      </div>
    </>
  );
}

export default ItemCount
