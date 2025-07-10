import { useState } from "react";

interface Farm {
  id: string;
  name: string;
}

interface FarmSelectorProps {
  farms: Farm[];
  onSelect: (farmId: string) => void;
}

export function FarmSelector({ farms, onSelect }: FarmSelectorProps) {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const farmId = e.target.value;
    setSelected(farmId);
    onSelect(farmId);
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
        Select a Farm
      </label>
      <select
        value={selected}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-[#a85e3c]"
      >
        <option value="" disabled>
          -- Select a Farm --
        </option>
        {farms.map((farm) => (
          <option key={farm.id} value={farm.id}>
            {farm.name}
          </option>
        ))}
      </select>
    </div>
  );
}
