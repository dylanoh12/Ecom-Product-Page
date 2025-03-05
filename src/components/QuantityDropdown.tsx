import React from "react";
interface QuantityDropdownProps {
  quantity: number;
  onChange: (value: number) => void;
}
export const QuantityDropdown = ({
  quantity,
  onChange
}: QuantityDropdownProps) => {
  return <select value={quantity} onChange={e => onChange(Number(e.target.value))} className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => <option key={num} value={num}>
          {num}
        </option>)}
    </select>;
};