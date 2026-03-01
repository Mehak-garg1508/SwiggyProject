import { imageGridCards } from "./utils/foodData.js";
import FoodCard from "./FoodCard.js";

export default function FoodOptions() {
  return (
    <>
      <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
        {imageGridCards.map((foodData) => (
          <FoodCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </>
  );
}
