import { Link } from "react-router-dom";
import "./_ProductDetail.css";

const ProductDetail = () => {
  const productsOffline = [
    {
      id: 4,
      title: "Cámara de acción GoPro Hero9 Black 5K 20MP",
      price: 1599.90,
      quantity: 1,
      description:
        "Megapixeles (Sensor):20 MP, Formato de grabación de video:4K, 2.7K, 1440p y 1080p, Estabilizador de Imagen / Video:HyperSmooth 3.0 ,Tamaño de Pantalla:2.27 ,Resistencia al agua:Sumergible hasta 10 m sin carcasa,Pantalla frontal:Sí,Batería:1720 mAh,Lente: Max Lens Mod",
      category: "Camaras",
      image: "https://coolboxpe.vtexassets.com/arquivos/ids/229527-800-auto?v=637989615919170000&width=800&height=auto&aspect=true",
    },
  ];
  return (
    <div className="container-lg position-relative">
      <div className="row my-3 position-absolute pt-2">
        <Link to="/" className="link-dark text-decoration-none h5">
          <i className="bi h4 bi-arrow-left"></i>
        </Link>
      </div>
      <div className="pt-3 mb-4">
      <div className="card pb-3 mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-xl-4 col-md-4 col-sm-12 g-2 gx-2 d-flex flex-column justify-content-center align-items-start">
            <div>
              <img
                id="res-img"
                src="https://coolboxpe.vtexassets.com/arquivos/ids/229527-800-auto?v=637989615919170000&width=800&height=auto&aspect=true"
                className="img-fluid"
                alt={productsOffline.name}
              />
            </div>
          </div>
          <div className="col-10 col-xl-7 col-md-7 col-sm-12 g-2 gx-2">
            <div className="card-body">
              <h5 className="card-header">Cámara de acción GoPro Hero9 Black 5K 20MP</h5>
              <hr />
              <p className="fw-bold text-capitalize">
                Categoria : Camaras
              </p>
              <p className="card-text">Megapixeles (Sensor):20 MP, Formato de grabación de video:4K, 2.7K, 1440p y 1080p, Estabilizador de Imagen / Video:HyperSmooth 3.0 ,Tamaño de Pantalla:2.27 ,Resistencia al agua:Sumergible hasta 10 m sin carcasa,Pantalla frontal:Sí,Batería:1720 mAh,Lente: Max Lens Mod</p>
              <p className="text-danger text-light-50 fw-bold h5">
              S/. 1599.90 PEN
              </p>
              <p className="text-muted">Delivery Gratis</p>
              <button
                className={"btn text-center me-2 "}
              >
                <i className="bi bi-cart-plus-fill"></i>
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
