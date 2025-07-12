import { UploadCard } from "@/components/uploads/UploadCard";

const uploadCards = [
  { label: "Facility register CSV", uploadKey: "facility" },
  { label: "Utility & fuel bills", uploadKey: "utility" },
  { label: "Water & waste log", uploadKey: "water" },
  { label: "HR snapshot CSV", uploadKey: "hr" },
  { label: "Board roster CSV + Policy PDFs + ISO 14065 verifier letter", uploadKey: "board" },
  { label: "ACX trade receipt PDF", uploadKey: "acx" },
];

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uploadCards.map(card => (
          <UploadCard key={card.uploadKey} label={card.label} uploadKey={card.uploadKey as any} />
        ))}
      </div>
    </div>
  );
} 