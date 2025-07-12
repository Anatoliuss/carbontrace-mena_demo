"use client";
import React, { useState } from "react";

export function DialogRisk({ open, onClose, onSave }: { open: boolean; onClose: () => void; onSave: (values: any) => void }) {
  const [hazards, setHazards] = useState("");
  const [kpis, setKpis] = useState("");
  const [date, setDate] = useState("");
  return open ? (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="font-bold mb-4">Climate-Risk Adaptation Plan – Extra Fields</h2>
        <label className="block mb-2 text-sm">Key hazards</label>
        <textarea className="border rounded w-full mb-4" value={hazards} onChange={e => setHazards(e.target.value)} />
        <label className="block mb-2 text-sm">Early-warning KPIs</label>
        <textarea className="border rounded w-full mb-4" value={kpis} onChange={e => setKpis(e.target.value)} />
        <label className="block mb-2 text-sm">Review date</label>
        <input type="date" className="border rounded w-full mb-4" value={date} onChange={e => setDate(e.target.value)} />
        <div className="flex gap-2 justify-end">
          <button className="px-4 py-1 rounded bg-slate-200" onClick={onClose}>Cancel</button>
          <button className="px-4 py-1 rounded bg-primary-500 text-white" onClick={() => { onSave({ hazards, kpis, date }); onClose(); }}>Save</button>
        </div>
      </div>
    </div>
  ) : null;
} 