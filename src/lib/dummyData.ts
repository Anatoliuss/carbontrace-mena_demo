export const uploadBuckets = [
  { id: 1, name: "Facility register CSV", files: ["facility.csv"], status: "uploaded" },
  { id: 2, name: "Utility & fuel bills", files: ["utility.pdf"], status: "uploaded" },
  { id: 3, name: "Water & waste log", files: [], status: "pending" },
  { id: 4, name: "HR snapshot CSV", files: [], status: "pending" },
  { id: 5, name: "Board roster CSV", files: [], status: "pending" },
  { id: 6, name: "Policy PDFs + ISO 14065 verifier letter", files: [], status: "pending" },
  { id: 7, name: "ACX trade receipt PDF", files: [], status: "pending" },
];

export const reportCards = [
  {
    title: "Annual Emissions Report",
    formats: ["PDF", "XML"],
    description: "Comprehensive annual GHG emissions disclosure.",
    icon: "DocumentChartBarIcon",
  },
  {
    title: "Climate-Risk Adaptation Plan",
    formats: ["PDF"],
    description: "Strategy for climate resilience and adaptation.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "GHG Inventory CRF",
    formats: ["XLSX", "XML"],
    description: "Greenhouse Gas Inventory Common Reporting Format.",
    icon: "TableCellsIcon",
  },
  {
    title: "Carbon-Credit Statement",
    formats: ["PDF", "JSON"],
    description: "Summary of carbon credits issued and retired.",
    icon: "CurrencyDollarIcon",
  },
  {
    title: "ADX 31-KPI ESG Disclosure",
    formats: ["PDF"],
    description: "Abu Dhabi Exchange ESG Key Performance Indicators.",
    icon: "ChartBarIcon",
  },
]; 