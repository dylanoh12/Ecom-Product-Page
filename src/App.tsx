import React, { useState } from "react";
import { Heart } from "lucide-react";
import { StarRating } from "./components/StarRating";
import { ColorSelector } from "./components/ColorSelector";
import { QuantityDropdown } from "./components/QuantityDropdown";
import { ImageMagnifier } from "./components/ImageMagnifier";  // Fixed import path
const colors = [{
  id: "noir-black",
  name: "Noire Black",
  value: "#242424"
}, {
  id: "navy-grey",
  name: "Navy & Grey",
  value: "#1B2A4A",
  isSpilt: true,
  secondaryValue: "#808080"  // Adding grey as secondary color
}, {
  id: "beige",
  name: "Beige",
  value: "#E8DCC4"
}];
export function App() {
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const getShoeImage = (colorId: string) => {
    switch (colorId) {
      case 'noir-black':
        return '/images/ASTI S1P NO.png';
      case 'navy-grey':
        return '/images/ASTI S1P GB.png';
      case 'beige':
        return '/images/ASTI S1P BE.png';
      default:
        return '/images/ASTI S1P GB.png';
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} items to cart!`);
  };

  return <main className="w-full min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageMagnifier 
          src={getShoeImage(selectedColor)} 
          alt={`ASTI S1P Safety Shoes - ${colors.find(c => c.id === selectedColor)?.name}`}
        />
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <StarRating initialRating={3} />
            <button onClick={() => setIsFavorite(!isFavorite)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className={`w-6 h-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </button>
          </div>
          <h1 className="text-3xl font-bold">ASTI S1P Safety Shoes</h1>
          <p className="text-gray-600">Designed for better torsion control and walking stability, these low-cut shoes are perfect for various industries, including craftsmanship, maintenance, public services, and more.</p>
          <p className="text-2xl font-bold text-blue-600">Php 1500.00</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Colors
              </label>
              <ColorSelector colors={colors} selectedColor={selectedColor} onColorSelect={setSelectedColor} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <QuantityDropdown quantity={quantity} onChange={setQuantity} />
            </div>
          </div>
          <button onClick={handleAddToCart} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </main>;
}