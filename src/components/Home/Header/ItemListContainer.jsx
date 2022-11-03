import React from "react";

const ItemListContainer = () => {
  return (
    <nav className="nav-categories navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Todos
              </a>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Equipos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Camaras
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Celulares
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Laptops
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    TV y Video
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Smartwatch y Bands
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accesorios
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Accesorios
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Audifonos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Parlantes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Componentes para PC
                  </a>
                </li>
              </ul>
            </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gamer
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Gamer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Consolas
                    </a>
                  </li>
                </ul>
              </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Smart Home
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar Producto..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
            <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default ItemListContainer;
