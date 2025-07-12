"use client";
import React, { useState } from "react";

export function DialogADX({ open, onClose, onSave }: { open: boolean; onClose: () => void; onSave: (values: any) => void }) {
  const [investment, setInvestment] = useState("");
  const [injuries, setInjuries] = useState("");
  const [capex, setCapex] = useState("");
  return open ? (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="font-bold mb-4">ADX 31-KPI ESG Disclosure – Extra Fields</h2>
        <label className="block mb-2 text-sm">Community investment (AED)</label>
        <input type="number" className="border rounded w-full mb-4" value={investment} onChange={e => setInvestment(e.target.value)} />
        <label className="block mb-2 text-sm">Total injuries</label>
        <input type="number" className="border rounded w-full mb-4" value={injuries} onChange={e => setInjuries(e.target.value)} />
        <label className="block mb-2 text-sm">Climate cap-ex (AED)</label>
        <input type="number" className="border rounded w-full mb-4" value={capex} onChange={e => setCapex(e.target.value)} />
        <div className="flex gap-2 justify-end">
          <button className="px-4 py-1 rounded bg-slate-200" onClick={onClose}>Cancel</button>
          <button className="px-4 py-1 rounded bg-primary-500 text-white" onClick={() => { onSave({ investment, injuries, capex }); onClose(); }}>Save</button>
        </div>
      </div>
    </div>
  ) : null;
} 