import { CoffeeItem } from "@/data";
import Image from "next/image";
import React from "react";

interface CoffeCardProps {
  coffee: CoffeeItem;
}

const CoffeeCard = ({ coffee }: CoffeCardProps) => {
  return (
    <div className="relative w-72 h-72">
      <div>
        <Image
          src={coffee.image}
          width={288}
          height={288}
          alt="Coffee"
          className="rounded-xl"
        />
        {coffee.popular && (
          <p className="absolute top-2 left-2 text-[#111315] bg-[#F6C768] text-xs px-2 py-1 font-bold rounded-full">
            Popular
          </p>
        )}
      </div>
      <div className="flex justify-between items-center pt-3">
        <h1 className="font-bold text-lg">{coffee.name}</h1>
        <p className=" text-sm font-bold bg-[#BEE3CC] text-[#111315] rounded p-1">
          {coffee.price}
        </p>
      </div>
      <div className="pt-3 flex justify-between ">
        <div className="flex space-x-2">
          <Image
            alt="star"
            width={20}
            height={20}
            src={coffee.rating ? "/images/Star_fill.svg" : "/images/Star.svg"}
          />
          <p className={`font-bold ${!coffee.rating && "text-[#6F757C]"}`}>
            {coffee.rating ? coffee.rating : "No ratings"}
            <span className=" text-[#6F757C]">
              {coffee.votes ? ` (${coffee.votes})` : null}
            </span>
          </p>
        </div>
        {!coffee.available && <p className="text-[#ED735D]">Sold Out</p>}
      </div>
    </div>
  );
};

export default CoffeeCard;
