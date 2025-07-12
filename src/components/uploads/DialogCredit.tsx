"use client";
import React, { useState } from "react";

export function DialogCredit({ open, onClose, onSave }: { open: boolean; onClose: () => void; onSave: (values: any) => void }) {
  const [disposition, setDisposition] = useState("");
  const [counterparty, setCounterparty] = useState("");
  return open ? (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-sm">
        <h2 className="font-bold mb-4">Carbon-Credit Statement – Extra Fields</h2>
        <label className="block mb-2 text-sm">Disposition</label>
        <select className="border rounded w-full mb-4" value={disposition} onChange={e => setDisposition(e.target.value)}>
          <option value="">Select...</option>
          <option>Issued</option>
          <option>Retired</option>
        </select>
        <label className="block mb-2 text-sm">Counter-party</label>
        <input type="text" className="border rounded w-full mb-4" value={counterparty} onChange={e => setCounterparty(e.target.value)} />
        <div className="flex gap-2 justify-end">
          <button className="px-4 py-1 rounded bg-slate-200" onClick={onClose}>Cancel</button>
          <button className="px-4 py-1 rounded bg-primary-500 text-white" onClick={() => { onSave({ disposition, counterparty }); onClose(); }}>Save</button>
        </div>
      </div>
    </div>
  ) : null;
} 