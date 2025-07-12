"use client";
import React, { useState } from "react";

export function DialogAER({ open, onClose, onSave }: { open: boolean; onClose: () => void; onSave: (values: any) => void }) {
  const [factor, setFactor] = useState("");
  const [denominator, setDenominator] = useState("");
  return open ? (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="font-bold mb-4">Annual Emissions Report – Extra Fields</h2>
        <label className="block mb-2 text-sm">Emission factor library</label>
        <select className="border rounded w-full mb-4" value={factor} onChange={e => setFactor(e.target.value)}>
          <option value="">Select...</option>
          <option>GHG Protocol</option>
          <option>ISO 14064-1</option>
          <option>DEFRA 2023</option>
          <option>ADNOC Local Factors</option>
        </select>
        <label className="block mb-2 text-sm">Intensity denominator</label>
        <input type="number" className="border rounded w-full mb-4" value={denominator} onChange={e => setDenominator(e.target.value)} />
        <div className="flex gap-2 justify-end">
          <button className="px-4 py-1 rounded bg-slate-200" onClick={onClose}>Cancel</button>
          <button className="px-4 py-1 rounded bg-primary-500 text-white" onClick={() => { onSave({ factor, denominator }); onClose(); }}>Save</button>
        </div>
      </div>
    </div>
  ) : null;
} 