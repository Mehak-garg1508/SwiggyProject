import { useParams } from "react-router";
import { useState, useEffect } from "react";
import MenuCard from "./MenuCard.js";

export default function SearchFood() {
  const { id } = useParams();

  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        const tempData =
          data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const filterData = tempData.filter(
          (items) => "title" in items?.card?.card,
        );

        setRestData(filterData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  // 🔥 SEARCH LOGIC
  const filteredData =
    food === ""
      ? RestData
      : RestData.map((category) => {
          const filteredItems =
            category?.card?.card?.itemCards?.filter((item) =>
              item?.card?.info?.name
                ?.toLowerCase()
                .includes(food.toLowerCase()),
            ) || [];

          return {
            ...category,
            card: {
              ...category.card,
              card: {
                ...category.card.card,
                itemCards: filteredItems,
              },
            },
          };
        }).filter((category) => category.card.card.itemCards.length > 0);

  if (loading)
    return <h1 className="text-center mt-20 text-2xl">Loading...</h1>;

  return (
    <div>
      {/* 🔍 Search Bar */}
      <div className="w-[80%] mx-auto mt-20">
        <input
          className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border"
          placeholder="Search here"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
      </div>

      {/* 🍽 Menu */}
      <div className="w-[80%] mx-auto mt-10">
        {filteredData.length === 0 ? (
          <h2 className="text-center text-xl">No items found</h2>
        ) : (
          filteredData.map((menuItems) => (
            <MenuCard
              key={menuItems?.card?.card?.title}
              menuItems={menuItems?.card?.card}
            />
          ))
        )}
      </div>
    </div>
  );
}
