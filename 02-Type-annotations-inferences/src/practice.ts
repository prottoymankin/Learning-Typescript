const products = [
  {
    id: 1,
    name: "Laptop",
    price: 80000,
    inStock: true
  },
  {
    id: 2,
    name: "Mouse",
    price: 1500,
    inStock: false
  }
];

const getProduct = (id: number) => {
  return products.find(product => product.id === id);
};

const calculateDiscount = (price: number, percentage: number) => {
  return price - (price * percentage) / 100;
};

const displayProduct = (product: {id: number, name: string, price: number, inStock: boolean} | undefined ) => {
  if (!product) {
    console.log("Product not found");
    return;
  }

  console.log(`${product.name}: ${product.price}`);
};

const product = getProduct(1);

if (product) {
  const finalPrice = calculateDiscount(product.price, 10);
  console.log(finalPrice);
}

displayProduct(product);