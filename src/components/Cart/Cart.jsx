import { Link } from "react-router-dom";
import { OrderReview, OrderSummary } from ".";
import "./_Cart.css";

const Cart = ({ products }) => {
  return (
    <div className="container-lg position-relative">
      <div className="row my-3 position-absolute pt-2">
        <Link to="/" className="link-dark text-decoration-none h5">
          <i className="bi h4 bi-arrow-left"></i>
        </Link>
      </div>
      <div className="row d-flex justify-content-center pt-5 pb-3 mt-3">
        <OrderReview products={products} />
        <OrderSummary total="6" totalItems="6" totalQuantity="500.59" />
      </div>
    </div>
  );
};

export default Cart;
