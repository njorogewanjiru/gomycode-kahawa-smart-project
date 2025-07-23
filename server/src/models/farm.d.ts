
import { Document } from "mongoose";

export interface IFarm extends Document {
  name: string;
  area?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// server/models/farm.d.ts
declare module '../models/Farm' {
  const Farm: any;
  export = Farm;
}
