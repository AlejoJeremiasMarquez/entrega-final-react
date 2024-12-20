import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./services/firebase";

const products = [
  {
    name: "BMW X5",
    price: 85000,
    category: "alta-gama",
    img: "",
    stock: 3,
    description: "Camioneta de lujo con un diseño de vanguardia y una amplia gama de características de seguridad.",
  },
  {
    name: "Audi Q3",
    price: 67000,
    category: "alta-gama",
    img: "",
    stock: 2,
    description: "SUV compacto de cinco puertas y cinco plazas.",
  },
  {
    name: "Mercedes-benz Clase Glc",
    price: 95900,
    category: "alta-gama",
    img: "",
    stock: 1,
    description: "SUV todoterreno con un diseño deportivo y elegante.",
  },
  {
    name: "DS4",
    price: 45900,
    category: "alta-gama",
    img: "",
    stock: 8,
    description: "Automóvil hatchback compacto del segmento C fabricado por DS Automoviles",
  },
  {
    name: "Mercedes-benz A250",
    price: 38000,
    category: "alta-gama",
    img: "",
    stock: 4,
    description: "Auto de lujo y alto rendimiento que se caracteriza por su diseño elegante y minimalista",
  },
  {
    name: "DS7",
    price: 46000,
    category: "alta-gama",
    img: "",
    stock: 7,
    description: "SUV de lujo del segmento D fabricado por DS Automoviles.",
  },
  {
    name: "Chrysler 300 C",
    price: 49000,
    category: "alta-gama",
    img: "",
    stock: 2,
    description: "Sedán de lujo de alto rendimiento con carrocería de cuatro puertas y familiar.",
  },
  {
    name: "Citroen C3 Aircross",
    price: 20000,
    category: "0km",
    img: "",
    stock: 12,
    description: "SUV compacto y robusto con capacidad para hasta siete pasajeros.",
  },
  {
    name: "Chevrolet Cruze",
    price: 31000,
    category: "0km",
    img: "",
    stock: 10,
    description: "Sedán deportivo del segmento C.",
  },
  {
    name: "Peugeot 208",
    price: 27000,
    category: "0km",
    img: "",
    stock: 20,
    description: "Auto compacto con un diseño deportivo y moderno.",
  },
  {
    name: "Fiat Cronos",
    price: 25000,
    category: "0km",
    img: "",
    stock: 25,
    description: "Sedán familiar de cuatro puertas, con un diseño deportivo y una buena dotación de seguridad.",
  },
  {
    name: "Volkswagen Nivus",
    price: 29000,
    category: "0km",
    img: "",
    stock: 15,
    description: "Camioneta SUV coupé que combina tecnología, potencia y diseño moderno.",
  },
  {
    name: "Renault Kardian",
    price: 27000,
    category: "0km",
    img: "",
    stock: 30,
    description: "SUV compacto con un diseño dinámico y atlético.",
  },
  {
    name: "Peugeot 2008",
    price: 30000,
    category: "0km",
    img: "",
    stock: 20,
    description: "SUV compacto con un diseño robusto y fluido, y una distancia elevada al suelo.",
  },
  {
    name: "Renault Duster",
    price: 32000,
    category: "0km",
    img: "",
    stock: 15,
    description: "SUV todoterreno con un diseño robusto y líneas agresivas.",
  },
  {
    name: "Fiat Mobi",
    price: 13200,
    category: "usados",
    img: "",
    stock: 2,
    description: "Hatchback de dimensiones compactas con un diseño robusto y suspensión preparada para distintos terrenos.",
  },
  {
    name: "Volkswagen Up!",
    price: 14000,
    category: "usados",
    img: "",
    stock: 5,
    description: "Auto urbano de tres puertas y cuatro plazas.",
  },
  {
    name: "Ford Ka",
    price: 16000,
    category: "usados",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVQcSfb5YBrwiL_h6SWA4Edyhqvnj8hpRQQ&s",
    stock: 12,
    description: "Auto compacto, orientado al público joven y al uso en la ciudad.",
  },
  {
    name: "Nissan March",
    price: 16300,
    category: "usados",
    img: "",
    stock: 7,
    description: "Auto compacto que se caracteriza por ser eficiente, confiable y versátil.",
  },
  {
    name: "Renault Sandero",
    price: 17000,
    category: "usados",
    img: "",
    stock: 11,
    description: "Auto compacto y moderno con un diseño renovado con llantas de aleación y nueva identidad lumínica.",
  },
  {
    name: "Fiat Argo",
    price: 16500,
    category: "usados",
    img: "",
    stock: 20,
    description: "Hatchback de 5 puertas y 5 pasajeros, con un diseño italiano moderno.",
  },
  {
    name: "Citroen C3",
    price: 17000,
    category: "usados",
    img: "",
    stock: 6,
    description: "Auto confortable que se caracteriza por su espacio interior y estilo similar al de un SUV.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1000);
  });
};

export const subirProductosFake = async () => {
  const bactch = writeBatch(db)
  const productRef = collection(db, "products")

  products.forEach((item)=> {
    const nuevoDoc = doc(productRef);
    bactch.set(nuevoDoc, item);
  })

  try {
    await bactch.commit()
    console.log("Todos los productos fueron cargados")

  } catch (error){
    console.log("Error al subir productos", error)
  }
}
