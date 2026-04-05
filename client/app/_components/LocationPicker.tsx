"use client";
import { ChevronDown, MapPin, X } from "lucide-react";
import { useState } from "react";

export const LocationPicker = () => {
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const displayLabel = address || "Add delivery address";
  const onHandleConfirm = () => {
    if (draft.trim()) setAddress(draft.trim());
    setOpen(false);
    setDraft("");
  };
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-red-400 dark:hover:border-red-500 transition-colors duration-150 max-w-55 group"
      >
        <MapPin className="w-4 h-4 text-red-500" />
        <div className="flex flex-col items-start min-w-0">
          <span className="text-[10px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500 leading-none">
            Deliver to
          </span>
          <span className="text-[13px] font-medium text-zinc-800 dark:text-zinc-200 truncate leading-snug">
            {displayLabel}
          </span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-zinc-400 cursor-pointer group-hover:text-red-500 transition-colors" />
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40"
        >
          <div
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl w-full max-w-md mx-4 p-5 border border-zinc-200 dark:border-zinc-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Delivery address
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 text-zinc-500" />
              </button>
            </div>
            <div className="relative mb-3">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
              <input
                type="text"
                placeholder="Enter your address…"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onHandleConfirm()}
                className="w-full h-11 pl-10 pr-4 rounded-xl cursor-pointer border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-[14px] text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 outline-none focus:border-red-400 dark:focus:border-red-500 transition-colors"
              />
            </div>
            <button
              onClick={onHandleConfirm}
              className=" w-full h-11 rounded-xl bg-red-500 hover:bg-red-600 text-white text-[14px] font-medium transition-colors duration-150 cursor-pointer"
            >
              Confirm address
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default LocationPicker;
