import { useState } from "react";

export function Reports() {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 py-10"
      style={{ backgroundImage: "url('/coffee-tree-close-up.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6 bg-white/80 p-3 rounded-lg w-fit">
        Reports & Analytics
      </h1>

      <div className="space-y-6">
        <SectionGroup
          title="📈 1. Yield & Production Reports"
          rows={["Season/Year", "Total Yield", "Average Yield", "Harvest Volume", "Target vs Actual", "Rejected vs Accepted"]}
        />

        <SectionGroup
          title="💰 2. Financial Reports"
          rows={["Income", "Expenses", "Profit/Loss", "Cost per KG", "Transactions", "Input Costs", "Sales", "Balance Sheet"]}
        />

        <SectionGroup
          title="🌾 3. Farm Input Usage Reports"
          rows={["Fertilizer Usage", "Pesticide Logs", "Stock Levels", "Tool Maintenance"]}
        />

        <SectionGroup
          title="🧑‍🌾 4. Labor & Task Reports"
          rows={["Worker Activity", "Labor Costs", "Daily Tasks", "Assignments"]}
        />

        <SectionGroup
          title="🗓️ 5. Activity Timeline Reports"
          rows={["Field Ops", "Harvest Calendar", "Treatment History"]}
        />

        <SectionGroup
          title="📦 6. Inventory & Storage Reports"
          rows={["Input Inventory", "Bean Storage", "Stock Movement", "Storage Capacity"]}
        />

        <SectionGroup
          title="🌿 7. Sustainability Analytics"
          rows={["Water Usage", "Soil Health", "Input Ratio", "Shade Trees", "Carbon Footprint"]}
        />

        <SectionGroup
          title="📋 8. Compliance & Certification"
          rows={["GAP Checklist", "Certification Logs", "Spray Compliance", "Traceability"]}
        />

        <SectionGroup
          title="👥 9. User & Role Activity"
          rows={["Login Logs", "Role Actions", "Audit Trail"]}
        />

        <SectionGroup
          title="🔄 10. Exportable Reports"
          rows={["Export Format", "Filter Options", "Charts", "Advanced Insights"]}
        />
      </div>
    </div>
  );
}

function SectionGroup({ title, rows }: { title: string; rows: string[] }) {
  const [activeSection, setActiveSection] = useState("Report/Analysis");
  const sections = ["Report/Analysis", "Comparison", "Old Report/Analysis"];

  return (
    <div className="bg-white/80 p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-[#5e8c61]">{title}</h2>
      <div className="flex space-x-4 mb-4">
        {sections.map((label) => (
          <button
            key={label}
            onClick={() => setActiveSection(label)}
            className={`px-4 py-2 rounded-md border font-medium ${
              activeSection === label
                ? "bg-[#a85e3c] text-white"
                : "bg-white text-[#3b2f2f] border-[#ccc]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <SectionBox label={activeSection} rows={rows} />
    </div>
  );
}

function SectionBox({ label, rows }: { label: string; rows: string[] }) {
  return (
    <div className="bg-[#fdfbf9]/90 p-4 rounded-md border space-y-2">
      <h3 className="text-lg font-medium text-[#3b2f2f] mb-2">{label}</h3>
      {rows.map((row, idx) => (
        <div key={idx} className="flex flex-col">
          <label className="text-sm text-[#5e8c61]">{row}</label>
          <input
            type="text"
            placeholder={`Enter ${row}`}
            className="mt-1 px-3 py-2 border rounded-md"
          />
        </div>
      ))}
    </div>
  );
}

export default Reports;
