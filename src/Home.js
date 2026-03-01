import Header from "./Header";
import FoodOptions from "./foodOptionsCard";
import GroceryOption from "./GroceryOptionsCard";
import DineOption from "./Component/DineOption";

export default function Home() {
  return (
    <>
      <Header></Header>
      <FoodOptions />
      <GroceryOption></GroceryOption>
      <DineOption></DineOption>
    </>
  );
}
