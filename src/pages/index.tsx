import { useSelector } from "react-redux";
import Button from "../components/ui/Button";
import ProductList from "../ProductList";
import { RootState, useAppDispatch } from "../app/store";
import { increaseAction } from "../app/features/counter/counterSlice";

const HomePage = () => {
  const {value,text}= useSelector(({counter}:RootState)=> counter)

  const dispatch=useAppDispatch()
  return (
    <div>

      counter = {value}
      <Button onClick={()=> dispatch(increaseAction(5))} >
      {text}
      </Button>
      <ProductList />
    </div>
  );
};

export default HomePage;
