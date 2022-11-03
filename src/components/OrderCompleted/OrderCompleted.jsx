const OrderCompleted = ({ total, orderId, date, info }) => {
  return (
    <div className="container text-center">
      <button className="btn btn-primary px-5 my-3">
        Cerrar
      </button>
      <div className=" row d-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-10 col-sm-10">
            <div className="card">
              <div className="card-header bg-secondary  text-light fw-bold">
                <h3>Order Recieved</h3>
              </div>
              <div className="card-body bg-light">
                <table className="table text-start">
                  <tbody>
                    <tr>
                      <td>Orden ID : </td>
                      <td>{orderId}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Dia : </td>
                      <td>{date}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Total : </td>
                      <td>${total}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Método de Pago : </td>
                      <td>{info.paymentMethod}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Nombres del Cliente : </td>
                      <td>{info.fullname}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>N° de Celular : </td>
                      <td>{info.phone}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Dirección de entrega : </td>
                      <td>{info.city + ", " + info.village}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
