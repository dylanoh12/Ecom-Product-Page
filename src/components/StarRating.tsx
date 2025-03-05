import React, { useState } from "react";
import { Star } from "lucide-react";
interface StarRatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
}
export const StarRating = ({
  initialRating = 0,
  onChange
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);
  const handleClick = (value: number) => {
    setRating(value);
    if (onChange) onChange(value);
  };
  return <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => <button key={star} onClick={() => handleClick(star)} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(0)} className="focus:outline-none">
          <Star className={`w-5 h-5 ${star <= (hover || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        </button>)}
    </div>;
};