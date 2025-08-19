// import Products from "./Products";

function Merchandise() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-background mb-4 tracking-wide">
          No Merchandise Available
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md">
          Our store is being stocked — check back soon for gear you'll love!
        </p>
      </div>
    </div>
  );
}

export default Merchandise;
