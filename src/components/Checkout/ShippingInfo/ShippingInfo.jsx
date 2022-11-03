
const ShippingInfo = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="row mb-3">
          <div className="col-md">
            <label className="form-label" htmlFor="fullname">
              Nombre Completo  :
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="form-control"
              placeholder="Full name"
              required
            />
          </div>
          <div className="col-md">
            <label className="form-label" htmlFor="phone">
              N° Celular :
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md">
            <label htmlFor="address[city]" className="form-label">
              Ciudad :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="City - Magaalada"
              name="city"
              required
            />
          </div>
          <div className="col-md">
            <label htmlFor="address" className="form-label">
              Dirección :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Xaafada - Xaafada"
              name="village"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="paymentMethod" className="form-label">
           Método de Pago:
          </label>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              defaultValue="Visa"
              id="1"
              required
            />
            <label className="form-check-label" htmlFor="1">
              Visa
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              defaultValue="DinnerClub"
              id="2"
              required
            />
            <label className="form-check-label" htmlFor="2">
              DinnerClub
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              defaultValue="MasterCard"
              id="3"
              required
            />
            <label className="form-check-label" htmlFor="3">
              MasterCard
            </label>
          </div>
        </div>
        <div className="col d-grid">
          <button type="submit" className="btn btn-danger text-center ">
            Ordenar Ahora
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
