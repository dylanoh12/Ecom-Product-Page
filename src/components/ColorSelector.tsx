import React from "react";

interface ColorOption {
  id: string;
  name: string;
  value: string;
  isSpilt?: boolean;
  secondaryValue?: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export const ColorSelector = ({
  colors,
  selectedColor,
  onColorSelect
}: ColorSelectorProps) => {
  return (
    <div className="flex gap-3" role="radiogroup" aria-label="Color options">
      {colors.map(color => (
        <button
          key={color.id}
          onClick={() => onColorSelect(color.id)}
          className={`
            w-8 h-8 rounded-full overflow-hidden
            ${selectedColor === color.id 
              ? 'ring-2 ring-offset-2 ring-blue-500' 
              : 'hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'
            }
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          `}
          aria-label={`Select ${color.name} color`}
          aria-pressed={selectedColor === color.id}
          title={color.name}
        >
          {color.isSpilt ? (
            <div className="w-full h-full flex">
              <div className="w-1/2 h-full" style={{ backgroundColor: color.value }}></div>
              <div className="w-1/2 h-full" style={{ backgroundColor: color.secondaryValue }}></div>
            </div>
          ) : (
            <div className="w-full h-full" style={{ backgroundColor: color.value }}></div>
          )}
        </button>
      ))}
    </div>
  );
};