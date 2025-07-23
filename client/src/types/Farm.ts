export interface FarmData {
  name: string;
  area: number;
  numberOfTrees?: number;
}

export interface Farm {
  _id: string;
  name: string;
  area: number;
  numberOfTrees?: number;
  createdAt?: string;
  updatedAt?: string;
}