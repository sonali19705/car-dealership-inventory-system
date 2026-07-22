import React from "react";
import Card from "../common/Card";

export default function StatsCard({
  icon,
  title,
  value,
  subtitle,
  className = "",
}) {
  return (
    <Card className={`flex items-center gap-4 p-5 ${className}`}>
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>

        <h3 className="text-2xl font-bold text-gray-900">
          {value}
        </h3>

        {subtitle && (
          <p className="text-xs text-gray-400 mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </Card>
  );
}