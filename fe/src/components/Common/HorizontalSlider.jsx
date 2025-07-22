import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HorizontalSlider = ({ title, items, renderItem }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const amount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-10">
      <h3 className="text-xl font-bold text-green-800 mb-4">{title}</h3>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-4 scroll-smooth px-2 overflow-hidden"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="min-w-[250px] max-w-[250px] shrink-0"
            >
              {renderItem(item)}
            </div>
          ))}
        </div>

        {/* Custom Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full p-2 text-green-700 hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border shadow rounded-full p-2 text-green-700 hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HorizontalSlider;
