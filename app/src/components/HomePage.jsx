import { BASE_URL } from "../App";

export function HomePage({ data, loading, error }) {
  return (
    <div className="relative min-h-[calc(100vh-14rem)] w-full">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg.png"
        alt="Background"
      />
      <div className="relative z-10 flex justify-center items-center py-10">
        {/* Scrollable container */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl h-[400px] overflow-y-auto p-4 bg-black/2 backdrop-blur-sm rounded-lg shadow-xl
         [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-gray-200
  [&::-webkit-scrollbar-thumb]:bg-red-600
        ">
          {data?.map((food, index) => (
            <FoodsCards key={index} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FoodsCards({ food }) {
  return (
    <div className="bg-white/20 backdrop-blur-md border border-white/30 p-2 text-white rounded-bl-xl rounded-tr-xl flex w-72 h-28 shadow-lg">
      <div className="w-1/3">
        <img
          className="w-full h-full object-cover rounded-md"
          src={BASE_URL+food.image} 
          alt={food.name}
        />
      </div>
      <div className="p-3 flex flex-col justify-between w-2/3">
        <h5 className="text-md font-semibold">{food.name}</h5>
        <p className="text-xs font-light truncate">{food.text}</p>
        <span className="bg-red-500 px-2 py-1 text-xs text-center rounded hover:cursor-pointer">
          ₹{food.price}
        </span>
      </div>
    </div>
  );
}
