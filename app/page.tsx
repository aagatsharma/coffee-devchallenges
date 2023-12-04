import CoffeeTabs from "@/components/home/CoffeeTabs";

export default function Home() {
  return (
    <div className=" bg-[#111315] min-h-screen text-[#FEF7EE]">
      <div className="bg-[url('/images/bg-cafe.jpg')] h-96 bg-cover" />
      <div className="max-w-7xl rounded m-auto bg-[#1B1D1F] -top-36 relative ">
        <div className=" p-10   ">
          <div className=" max-w-lg m-auto text-center bg-[url('/images/vector.svg')] bg-no-repeat bg-right-top flex flex-col pt-11 space-y-4">
            <h1 className=" text-4xl">Our Collection</h1>
            <h2 className=" text-lg text-[#6F757C]">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </h2>
          </div>
          <CoffeeTabs />
        </div>
      </div>
    </div>
  );
}
