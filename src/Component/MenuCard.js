import RestInfo from "./RestInfo";
import { useEffect, useState } from "react";

export default function MenuCard({ menuItems, foodSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
        <div>
          {menuItems.categories.map((items) => (
            <MenuCard
              key={items?.title}
              menuItems={items}
              foodSelected={foodSelected}
            ></MenuCard>
          ))}
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="w-full mt-6">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-5">{menuItems.title}</p>
          {menuItems.title != "Top Picks" ? (
            <button
              className="text-3xl font-bold mr-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "⌄"}
            </button>
          ) : null}
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  if (foodSelected === "veg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-5">{menuItems.title}</p>
          {menuItems.title != "Top Picks" ? (
            <button
              className="text-3xl font-bold mr-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "⌄"}
            </button>
          ) : null}
        </div>
        <div>
          {menuItems?.itemCards
            ?.filter((food) => "isVeg" in food?.card?.info)
            .map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              ></RestInfo>
            ))}
        </div>
      </div>
    );
  }

  if (foodSelected === "nonveg") {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-5">{menuItems.title}</p>
          {menuItems.title != "Top Picks" ? (
            <button
              className="text-3xl font-bold mr-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "⌄"}
            </button>
          ) : null}
        </div>
        <div>
          {menuItems?.itemCards
            ?.filter((food) => !("isVeg" in food?.card?.info))
            .map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              ></RestInfo>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-5">{menuItems.title}</p>
          {menuItems.title != "Top Picks" ? (
            <button
              className="text-3xl font-bold mr-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "⌄"}
            </button>
          ) : null}
        </div>
        <div>
          {menuItems?.itemCards?.map((items) => (
            <RestInfo
              key={items?.card?.info?.id}
              restData={items?.card?.info}
            ></RestInfo>
          ))}
        </div>
      </div>
    </div>
  );
}
