import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export interface Farm {
  _id: string;
  name: string;
  area: number;
  numberOfTrees?: number;
}

interface FarmContextType {
  currentFarm: Farm | null;
  setCurrentFarm: (farm: Farm | null) => void;
  clearFarmSelection: () => void;
}

const FarmContext = createContext<FarmContextType | undefined>(undefined);

export const FarmProvider = ({ children }: { children: ReactNode }) => {
  const [currentFarm, setCurrentFarmState] = useState<Farm | null>(null);

  // Load saved farm from localStorage on mount
  useEffect(() => {
    const savedFarmId = localStorage.getItem('selectedFarmId');
    const savedFarmData = localStorage.getItem('selectedFarmData');
    
    if (savedFarmId && savedFarmData) {
      try {
        const farmData = JSON.parse(savedFarmData);
        setCurrentFarmState(farmData);
      } catch (error) {
        console.error("Error parsing saved farm data:", error);
        // Clear corrupted data
        localStorage.removeItem('selectedFarmId');
        localStorage.removeItem('selectedFarmData');
      }
    }
  }, []);

  const setCurrentFarm = (farm: Farm | null) => {
    setCurrentFarmState(farm);
    
    if (farm) {
      // Save both ID and full farm data for persistence
      localStorage.setItem('selectedFarmId', farm._id);
      localStorage.setItem('selectedFarmData', JSON.stringify(farm));
    } else {
      localStorage.removeItem('selectedFarmId');
      localStorage.removeItem('selectedFarmData');
    }
  };

  const clearFarmSelection = () => {
    setCurrentFarm(null);
  };

  return (
    <FarmContext.Provider value={{ 
      currentFarm, 
      setCurrentFarm, 
      clearFarmSelection 
    }}>
      {children}
    </FarmContext.Provider>
  );
};

export const useFarm = () => {
  const context = useContext(FarmContext);
  if (!context) {
    throw new Error("useFarm must be used within a FarmProvider");
  }
  return context;
};