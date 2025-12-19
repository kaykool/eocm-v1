"use client";

import { FilterType } from "@/data";
import { useManageUrlParams } from "@/hooks/useManageUrlParams";

export const EDropdown = ({
  name,
  data,
}: {
  name: "sortBy";
  data: FilterType[];
}) => {
  const { currentValueParams: sortByParam, setAndPushUrlParams } =
    useManageUrlParams({
      paramName: name,
    });
  return (
    <div className="flex gap-2 items-center justify-end">
      <label htmlFor={name}>Sort by: </label>
      <select
        name={name}
        id={name}
        value={sortByParam || 0}
        className="border border-gray-200  p-1 rounded-md shadow-sm"
        onChange={(e) => setAndPushUrlParams(e.target.value)}
      >
        {data.map((op) => (
          <option key={op.value} value={op.value}>
            {op.text}
          </option>
        ))}
      </select>
    </div>
  );
};
