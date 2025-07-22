import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className="relative w-full h-full">
      <img
        src={images[index]}
        alt={`image-${index}`}
        className="w-full h-full object-cover rounded-l-xl"
      />

      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ImageSlider;
