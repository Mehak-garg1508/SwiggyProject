import { Link } from "react-router";

export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/delhi/" + restInfo.info.id} target="_blank">
      {/* // hover per 5% chota */}
      <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
        <div className="w-72">
          <img
            className="w-full h-48 object-cover rounded-xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restInfo?.info?.cloudinaryImageId
            }
            alt={restInfo?.info?.name}
          />

          <div className="mt-3">
            <div className="font-bold text-lg">{restInfo?.info?.name}</div>

            <div className="flex items-center gap-2 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <rect
                  width="24"
                  height="24"
                  rx="5"
                  className="fill-green-600"
                />
                <path
                  d="M12 2L14.9 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9.1 8.26L12 2Z"
                  className="fill-white"
                />
              </svg>

              <span className="font-semibold">{restInfo?.info?.avgRating}</span>

              <span className="text-gray-600">
                {restInfo?.info?.sla?.slaString}
              </span>
            </div>

            <div className="text-gray-500 text-xl mt-1 h-7 overflow-hidden">
              {restInfo?.info?.cuisines.join(" ")}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
