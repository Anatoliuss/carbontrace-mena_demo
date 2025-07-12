"use client";
import React, { useState } from "react";

export function DialogCRF({ open, onClose, onSave }: { open: boolean; onClose: () => void; onSave: (values: any) => void }) {
  const [baseline, setBaseline] = useState("");
  const [boundary, setBoundary] = useState("");
  const [denominator, setDenominator] = useState("");
  return open ? (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="font-bold mb-4">GHG Inventory CRF – Extra Fields</h2>
        <label className="block mb-2 text-sm">Baseline year</label>
        <input type="number" className="border rounded w-full mb-4" value={baseline} onChange={e => setBaseline(e.target.value)} />
        <label className="block mb-2 text-sm">Boundary approach</label>
        <select className="border rounded w-full mb-4" value={boundary} onChange={e => setBoundary(e.target.value)}>
          <option value="">Select...</option>
          <option>Equity share</option>
          <option>Operational control</option>
        </select>
        <label className="block mb-2 text-sm">KPI denominator</label>
        <input type="number" className="border rounded w-full mb-4" value={denominator} onChange={e => setDenominator(e.target.value)} />
        <div className="flex gap-2 justify-end">
          <button className="px-4 py-1 rounded bg-slate-200" onClick={onClose}>Cancel</button>
          <button className="px-4 py-1 rounded bg-primary-500 text-white" onClick={() => { onSave({ baseline, boundary, denominator }); onClose(); }}>Save</button>
        </div>
      </div>
    </div>
  ) : null;
} 