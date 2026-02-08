"use client";

import { useRouter, useSearchParams } from "next/navigation";

const sortOptions = [
  { value: "default", label: "מיון ברירת מחדל" },
  { value: "newest", label: "חדשים" },
  { value: "price-asc", label: "מחיר: נמוך לגבוה" },
  { value: "price-desc", label: "מחיר: גבוה לנמוך" },
];

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "default";

  function handleSortChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.push(`/shop?${params.toString()}`);
  }

  return (
    <select
      value={currentSort}
      onChange={(e) => handleSortChange(e.target.value)}
      className="px-4 py-2 border border-brand-border rounded-md text-sm text-brand-dark bg-white"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
