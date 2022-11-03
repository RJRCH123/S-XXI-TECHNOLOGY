import { Link } from "react-router-dom";
import "./_EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="container">
      <div className="row p-2">
        <div className="card">
          <div className="card-body text-center">
            <div className="col-lg-12">
              <div>
                <Link to="/" className="btn btn-danger btn-lg">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
