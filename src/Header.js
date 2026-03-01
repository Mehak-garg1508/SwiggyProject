import { Link } from "react-router";

export default function Header() {
  return (
    <div className="bg-[#ff5200] font-sans">
      {/* first div */}
      <div className="flex justify-between py-8 max-w-[80%] container mx-auto gap-10">
        <div className="">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            className="w-40 h-12"
          />
        </div>
        <div className="flex items-center gap-10 text-white font-bold">
          <a target="_blank" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="_blank" href="https://partner.swiggy.com/food/login">
            Partner with us
          </a>
          <a
            target="_black"
            href="https://www.swiggy.com"
            className="border px-4 py-3 rounded-2xl"
          >
            Get the App
          </a>
          <a
            target="_black"
            href="https://www.swiggy.com"
            className="border border-black bg-black text-white rounded-2xl py-3 px-4"
          >
            Sign In
          </a>
        </div>
      </div>
      {/* second Div */}
      <div className="py-14 px-10 relative">
        <div id="img">
          <img
            className="h-110 w-60 absolute top-0 left-0"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          ></img>
          <img
            className="h-110 w-60 absolute top-0 right-0"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          />
        </div>
        <div className="text-5xl text-white font-bold max-w-[60%] continer mx-auto text-center">
          <h3>Order food & groceries. Discover best resturants. Swiggy it!</h3>
        </div>
        <div
          id="search-bar-location"
          className="max-w-[70%] container mx-auto flex gap-5 mt-8"
        >
          <input
            className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Delhi, India"
          ></input>
          <input
            className="bg-white w-[50%] text-xl px-6 py-4 rounded-2xl"
            placeholder="Search for resturant and items for more"
          ></input>
        </div>
      </div>
      {/*third div*/}
      <div className="max-w-[80%] container mx-auto flex">
        <Link to="/restaurant" target="_blank">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
        </Link>
        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
        </a>
        <a href="https://www.swiggy.com/dineout">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
        </a>
      </div>
    </div>
  );
}
