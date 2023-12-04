import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CoffeeCard from "./CoffeeCard";

import { coffeedata } from "@/data";

const CoffeeTabs = () => {
  return (
    <div className=" pt-10">
      <Tabs defaultValue="all-products" className="">
        <TabsList className=" flex justify-center bg-inherit gap-4">
          <TabsTrigger
            value="all-products"
            className="text-md text-[#FEF7EE] data-[state=active]:bg-[#6F757C] data-[state=active]:text-[#FEF7EE] data-[state=active]:rounded-lg"
          >
            All Products
          </TabsTrigger>
          <TabsTrigger
            value="available-now"
            className="text-md text-[#FEF7EE] data-[state=active]:bg-[#6F757C] data-[state=active]:text-[#FEF7EE] data-[state=active]:rounded-lg"
          >
            Available Now
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all-products">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 pt-10 place-items-center">
            {coffeedata.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="available-now">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 pt-10 place-items-center">
            {coffeedata.map((coffee) => {
              return (
                coffee.available && (
                  <CoffeeCard key={coffee.id} coffee={coffee} />
                )
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CoffeeTabs;
