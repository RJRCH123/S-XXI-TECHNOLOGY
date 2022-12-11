import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
// FIREBASE
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
// CONTEXT
import { useCartContext } from "../../context/CartContext";
// STYLE
import "./_Cart.css";
import swal from "sweetalert";
// COMPONENTS
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
  // Datos que se ingresan en el formulario, para completar la compra
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const { cart, totalPrice, removeAll } = useCartContext();

  // Datos de usuario que realiza la compra / Objeto que se manda a base de datos
  const order = {
    buyer: {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
    },
    date: moment().format("DD/MM/YYYY"),
    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice(),
  };

  // Función para llenar los campos del formulario
  const hadleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  // Función para guardar la orden de compra
  const handleClick = () => {
    // Instancia de Firestore
    const db = getFirestore();
    // Referencia a una colección, si no existe crea la colección
    const ordersCollection = collection(db, "orders");
    // Promesa
    addDoc(ordersCollection, order)
      .then(({ id }) => swal(`Id de la compra realizada: ${id}`)) //`Id de la orden realizada: ${console.log(id)}`
      // Actualizar documento (stock)
      .then((res) => {
        cart.forEach((product) => {
          const ordersCollection = doc(db, "products", product.id);
          updateDoc(ordersCollection, {
            stock: product.stock - product.quantity,
          });
        });
      });
    removeAll();
  };

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <div className="">
          <Link to="/" className="bi bi-arrow-left-square-fill">
            {" "}
            Realizar compras
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="list-shop">
      <div className="list-content">
        <h2> Lista de los Productos</h2>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
      </div>
      <div className="container-Form">
        <h2>Detalle de la Compra</h2>
        <div className="shop-products">
        {cart.map((product) => (
          <div>
            <p><b>{product.title}</b></p>
            <div className="item-info">
            <p>Cantidad: {product.quantity}</p>
            <p >
              Subtotal: <b>S/. {product.quantity * product.price}</b>
            </p>
            </div>
            <hr />
          </div>
        ))}
        <p className="total">Total: <b>S/. {totalPrice()}</b></p>
        </div>
          <Link to="/" className="btn-continue">
            {" "}
            Seguir comprando
          </Link>
          <h2>Datos del Comprador</h2>
        <form action="#" autoComplete="off" className="shop-person">
<label>Nombre y Apellidos</label>
          <input
            required
            name="name"
            type="text"
            placeholder="Nombre"
            value={formValues.name}
            onChange={hadleInputChange}
          />
          <label>Teléfono</label>
          <input
            required
            name="phone"
            type="text"
            placeholder="Teléfono"
            value={formValues.phone}
            onChange={hadleInputChange}
          />
          <label>Correo</label>
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={hadleInputChange}
          />
          <label>Dirección</label>
          <input
            required
            name="address"
            type="text"
            placeholder="Direción"
            value={formValues.address}
            onChange={hadleInputChange}
          />
        </form>
          <button onClick={handleClick} className="btn-buy">
            {" "}
            Confirmar compra
          </button>
      </div>
    </div>
  );
};

export default Cart;
