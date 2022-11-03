import { Link } from "react-router-dom";
import { ShippingInfo, OrderSummery, OrderReview } from ".";

const Checkout = ({
  cartInfo,
  id,
}) => {
  return (
    <div className="container-lg position-relative">
      <div className="row my-3 position-absolute pt-2" >
        <Link to="/cart" className="link-dark text-decoration-none h5">
          <i className="bi h4 bi-arrow-left"></i> 
        </Link>
      </div>
      <div className="row flex-md-row-reverse d-flex justify-content-between pt-5 pb-3 mt-3">
        <h3 className="text-dark mb-3 card-header">Información de la Compra</h3>
        <div className="col-12 col-lg-4 col-md-4 col-sm-12 float-md-end mb-3">
          <OrderReview cart={cartInfo}/>
          <OrderSummery
            total="total"
            totalQuantity="totalQuantity"
            totalItems="totalItems"
          />
        </div>
        <div className="col-12 col-lg-7 col-md-7 col-sm-12 float-md-start mb-3">
          <ShippingInfo
            cart={cartInfo}
            id={id}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
