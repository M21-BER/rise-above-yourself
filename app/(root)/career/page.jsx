import Header from "../../components/Header";
// import Products from "./Products";

function Merchandise() {
  return (
    <div>
      {/* <Header
        page="Merch"
        subtitle=" Discover our premium selection of fitness products designed to boost
          your performance and support your training journey."
      /> */}
      {/* <Products /> */}
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] px-4 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-wide">
          No Career Available
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md">
          We're working on something exciting. Stay tuned!
        </p>
      </div>
    </div>
  );
}

export default Merchandise;
