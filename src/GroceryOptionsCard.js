import { GroceryGridCard } from "./utils/grocery";
import GroceryCard from "./GroceryCard";

export default function GroceryOption() {
  return (
    <>
      <div className="w-[80%] container mx-auto mt-20">
        <h1 className="text-3xl font-bold">Shop Groceries</h1>
        <div className="container mx-auto flex gap-5 flex-nowrap overflow-auto mt-5">
          {GroceryGridCard.map((groceryData) => (
            <GroceryCard
              key={groceryData.id}
              groceryData={groceryData}
            ></GroceryCard>
          ))}
        </div>
      </div>
    </>
  );
}
