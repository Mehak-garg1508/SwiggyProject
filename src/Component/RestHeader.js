import { useSelector } from "react-redux";
import { Link } from "react-router";
export default function RestHeader() {
  const counter = useSelector((state) => state.cartslice.count);
  return (
    <div className="container w-[80%] mx-auto py-4 px-8 bg-orange-600 text-5xl flex justify-between items-center mt-10">
      <div>
        <p className="text-gray-100 font-bold">Swiggy</p>
      </div>
      <div>
        <Link to="/checkout">
          <p className="text-gray-100">Cart {`(${counter})`}</p>
        </Link>
      </div>
    </div>
  );
}
