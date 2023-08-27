import "../CSS/Carrito.css"
import React, { useState, useEffect} from "react";

export default function Carrito(carritoArray) {

    useEffect(() => {
        console.log(carritoArray[0]);
    })
    const [counter, setCounter] = useState(1);

    return (
        <div className="carrito-container">
            <h1>Mi carrito</h1>
            <div className="carrito-item">
                <img src="#" alt="image"/>
                <div className="info">
                    <p>Nombre</p>
                    <p>Precio</p>
                </div>
                <div className="item-cantidad">
                    <button onClick={() => {setCounter(counter-1)}}>-</button>
                    <p>{counter}</p>
                    <button onClick={() => {setCounter(counter+1)}}>+</button>
                </div>
            </div>
        </div>
    );
}
