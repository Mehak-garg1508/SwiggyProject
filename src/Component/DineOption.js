import { dineoutRestaurants } from "../utils/dineData";
import DineCard from "./DineCard";

export default function DineOption() {
  return (
    <div className="w-[80%] mx-auto mt-20 mb-20">
      <p className="text-3xl font-bold">Discover best resturatnt on Dineout</p>
      <div className="flex flex-nowrap overflow-x-auto mt-5 gap-5">
        {dineoutRestaurants.map((RestData) => (
          <DineCard key={RestData?.info?.id} RestData={RestData} />
        ))}
      </div>
    </div>
  );
}
