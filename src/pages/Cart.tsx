import { useSelector } from "react-redux";
import { cartSelector } from "../app/features/cart/cartSlice";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../interface";

const Cart = () => {
 const {cartItems} = useSelector(cartSelector)
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
    {cartItems.map((item:IProduct)=>(
      <ProductCard  key={item.id}  product={item}/>
    ))}
   </div>;
};

export default Cart;
