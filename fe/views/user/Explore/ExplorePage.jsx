import React from "react";
import { BsBoxSeam, BsTruck } from "react-icons/bs";
import ExploreBanner from "./ExploreBanner";
import NewlyPosted from "./NewlyPosted";
import AllProducts from "./AllProducts";

const ExplorePage = () => {
  return (
    <div className="bg-[#ecf6ec] min-h-screen px-4 py-6">
     <ExploreBanner/>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <NewlyPosted/>     
      </div>
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
         <AllProducts/> 
      </div>
    </div>
  );
};

export default ExplorePage;
