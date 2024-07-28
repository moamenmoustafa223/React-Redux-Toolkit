import { IProduct } from "../interface";

export const addItemToShoppingCart = (
  cartItems: IProduct[],
  product: IProduct
) => {
  // exists => increase qty
  const exists = cartItems.find((item) => item.id === product.id);
  console.log(exists);
  if (exists) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  return [...cartItems, { ...product, qty: 1 }];
  // not exists => add the product
};
