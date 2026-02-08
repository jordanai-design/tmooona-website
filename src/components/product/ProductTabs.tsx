"use client";

import { useState } from "react";

interface ProductTabsProps {
  description: string;
  dimensions?: string;
  materials?: string;
}

export default function ProductTabs({
  description,
  dimensions,
  materials,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "info">(
    "description"
  );

  return (
    <div>
      {/* Tab headers */}
      <div className="flex border-b border-brand-border">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "description"
              ? "text-brand-dark border-b-2 border-brand-green"
              : "text-brand-gray hover:text-brand-dark"
          }`}
        >
          תיאור
        </button>
        <button
          onClick={() => setActiveTab("info")}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === "info"
              ? "text-brand-dark border-b-2 border-brand-green"
              : "text-brand-gray hover:text-brand-dark"
          }`}
        >
          מידע נוסף
        </button>
      </div>

      {/* Tab content */}
      <div className="py-4">
        {activeTab === "description" ? (
          <p className="text-brand-dark leading-relaxed">{description}</p>
        ) : (
          <div className="space-y-3">
            {dimensions && (
              <div className="flex gap-2">
                <span className="text-brand-gray font-medium">מידות:</span>
                <span className="text-brand-dark">{dimensions}</span>
              </div>
            )}
            {materials && (
              <div className="flex gap-2">
                <span className="text-brand-gray font-medium">חומרים:</span>
                <span className="text-brand-dark">{materials}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
