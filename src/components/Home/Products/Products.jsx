import Product from "./Product/Product";
import Header from "../Header/Header";

const Products = ({ addCart, cart }) => {
  const productsOffline = [
    {
      id: 1,
      title: "Altavoz inteligente Amazon Echo Dot 4ta generación, control de voz con Alexa, negro",
      price: 259.90,
      quantity: 1,
      description:
        "Bluetooth:Sí, Conexión auxiliar 3.5 mm: Sí, Woofer: Sí, Color: Negro, Resistencia al agua parlantes: No, Compatibilidad: Amazon Music, Apple Music, Spotify, Sirius XM, y otros, Micrófonos: Sí, Sistema operativos compatibles: Fire OS, Android y iOS",
      category: "Parlantes",
      image: "https://coolboxpe.vtexassets.com/arquivos/ids/211688-800-auto?v=637878765738570000&width=800&height=auto&aspect=true",
    },
    {
      id: 2,
      title: "Silla gamer Dreizt Optimus Series Pro alta calidad, máx. 150 kg, inclinación 180°, color rojo",
      price: 759.00,
      quantity: 2,
      description:
        "Ancho del asiento:67cm, Almohadillas:Sí, Ruedas:5, Color: Rojo, Capacidad de carga máxima: 150 kg, Regulación de altura: 124cm-134cm, Material de la estructura: PU+PVC, Material de la base: Nylon",
      category: "Gamer",
      image:
        "https://coolboxpe.vtexassets.com/arquivos/ids/229748-800-auto?v=637992851410500000&width=800&height=auto&aspect=true",
    },
    {
      id: 3,
      title: "Laptop HP 15-EF1009LA 15.6, AMD Ryzen 3 4300U, 256GB ssd, 4GB ram, Radeon, Win10 Home, teclado español, plateado",
      price:  1499.00,
      quantity: 6,
      description:
        "Procesador:AMD Ryzen 3, Detalle del procesador:Ryzen 3 4300U, Capacidad de Disco sólido (SSD):256 GB,Procesador gráfico:Radeon, Nombre de SO:Windows 10 Home, Tamaño de pantalla: 15.6, Resolución de pantalla: 1366 x 768 píxeles, Memoria RAM: 4 GB",
      category: "Laptops",
      image: "https://coolboxpe.vtexassets.com/arquivos/ids/198031-800-auto?v=637778093971400000&width=800&height=auto&aspect=true",
    },
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
    {
      id: 5,
      title:
        "Kit de 30 accesorios para Gopro Hero 11, Hero 10, Hero 9, Hero 8, Hero 7, Hero 6, Hero 5, Hero 4 y otras cámaras de acción",
      price: 199.90,
      quantity: 2,
      description:
        "Compatibilidad:Todas las versiones de GoPro y la mayoría de cámaras de acción del mercado. ¿Qué contiene la caja?:Incluye: 1 Case semirígido 21.7 x 32.5 x 6.5cm; 1 Soporte para el pecho; 1 Soporte para la cabeza; 1 Flotador; 4 Monturas adhesivas curvas y 4 planas; 1 Trípode con cabezal que gira 360°, patas flexibles cubiertas de foam, patas 12.5 cm, cabezal 5 cm, total 17.5 cm; 1 Selfie Stick plegado (8 pulgadas) o extendido (43 pulgadas). Tiene una cabeza giratoria de 180°; 1 Montura con succión; 1 Bolsa de tela (22*14.2cm); 1 Montura para tubo/bicicleta + 2 soportes de unión largos y 2 cortos; 2 Monturas gancho; 2 Monturas de hebilla clásicas; 2 Monturas para trípode; 3 Tornillos de ajuste.",
      category: "Accesorios",
      image: "https://coolboxpe.vtexassets.com/arquivos/ids/205812-800-auto?v=637812595317770000&width=800&height=auto&aspect=true",
    },
    {
      id: 6,
      title: "Aro de luz Jetion 10 26 cm + soporte de bisagras 33 cm",
      price: 83.90,
      quantity: 3,
      description:
        "Incluye tripode: Sí, Soporte para celular: Sí, Pulgadas del aro: 10, Potencia: 10W, Material: ABS, Luz regulable: Sí, Lúmenes: 1000 lum, Largo de cable: 2 metros",
      category: "Accesorios",
      image: "https://coolboxpe.vtexassets.com/arquivos/ids/192341-800-auto?v=637692574880270000&width=800&height=auto&aspect=true",
    },
  ];

  return (
    <div className="container">
      <div className="row d-flex align-items-sm-start justify-content-sm-start justify-content-center align-items-sm-center">
        <Header />
        {productsOffline.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              cart={cart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
