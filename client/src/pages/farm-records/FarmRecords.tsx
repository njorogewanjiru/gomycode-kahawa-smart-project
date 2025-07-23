import { WorkersActivitiesSection } from "./WorkersActivitiesSection";
import { PlantingRecordsSection } from "./PlantingRecordsSection";
import { FertilizerApplicationSection } from "./FertilizerApplicationSection";
import { PesticideHerbicideSection } from "./PesticideHerbicideSection";
import { PruningStumpingSection } from "./PruningStumpingSection";
import { IrrigationMulchingSection } from "./IrrigationMulchingSection";
import { HarvestRecordsSection } from "./HarvestRecordsSection";
import { ProcessingRecordsSection } from "./ProcessingRecordsSection";
import { YieldRecordsSection } from "./YieldRecordsSection";
import { StorageRecordsSection } from "./StorageRecordsSection";
import { SalesDeliverySection } from "./SalesDeliveryRecords";
import { GeneralNotesSection } from "./GeneralNotesSection";

export function FarmRecords() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-10"
      style={{ backgroundImage: "url('/boni.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-8 text-center">
        ☕ Farm Records Dashboard
      </h1>

      {/* Standard Record Sections */}
      <WorkersActivitiesSection />
      <YieldRecordsSection />

      {/* Detailed Records */}
      <PlantingRecordsSection />
      <FertilizerApplicationSection />
      <PesticideHerbicideSection />
      <PruningStumpingSection />
      <IrrigationMulchingSection />
      <HarvestRecordsSection />
      <ProcessingRecordsSection />
      <StorageRecordsSection />
      <SalesDeliverySection />
      <GeneralNotesSection />
    </div>
  );
}
