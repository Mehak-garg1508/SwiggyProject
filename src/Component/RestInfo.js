import { useState, useEffect } from "react";
import { addItems, IncrementItems, DecrementItems } from "../stored/CardSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({ restData }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartslice.items);

  const elem = items.find((item) => item.id === restData.id);
  const count = elem ? elem.quantity : 0;

  function handleAddItems() {
    dispatch(addItems(restData));
  }

  function handleIncrementItems() {
    dispatch(IncrementItems(restData));
  }

  function handleDecrementItems() {
    dispatch(DecrementItems(restData));
  }

  return (
    <>
      <div className="w-full flex justify-betwee items-start mb-2 pb-2 gap-[10%]">
        <div className="w-[65%]">
          <p className="text-2xl text-gray-700 font-semibold mb-1">
            {restData?.name}
          </p>
          <p className="text-xl">
            {"₹" +
              ("defaultPrice" in restData
                ? restData?.defaultPrice / 100
                : restData?.price / 100)}
          </p>
          <span className="text-green-800">
            {restData?.ratings?.aggregatedRating?.rating}
          </span>
          <span>
            {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>
          <p>{restData?.description}</p>
        </div>
        <div className="w-[20%] relative">
          <img
            className="w-full h-40 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restData.imageId
            }
          ></img>
          {count === 0 ? (
            <button
              className="absolute bottom-3 -translate-x-1/2 left-1/2 text-2xl rounded-xl text-green-600 px-6 py-2 bg-white shadow-md border border-white"
              onClick={() => handleAddItems()}
            >
              ADD
            </button>
          ) : (
            <div className="absolute bottom-3 -translate-x-1/2 left-1/2 flex gap-3 text-2xl text-green-600 px-6 py-2 bg-white shadow-md border border-white rounded-xl">
              <button onClick={() => handleDecrementItems()}>-</button>
              <span>{count}</span>
              <button onClick={() => handleIncrementItems()}>+</button>
            </div>
          )}
        </div>
      </div>
      <hr className="mb-6 mt-4 w-[100%] mx-auto"></hr>
    </>
  );
}
