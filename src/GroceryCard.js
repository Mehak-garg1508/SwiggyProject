export default function GroceryCard({ groceryData }) {
  return (
    <>
      <div className="flex-none">
        <a href={groceryData?.action?.link}>
          <img
            className="w-36 h-35 object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${groceryData?.imageId}`}
          ></img>
        </a>
        <h2 className="text-center font-bold">{groceryData?.action?.text}</h2>
      </div>
    </>
  );
}
