"use client";

import { categories, CATEGORY_PARAM } from "@/data";
import { useManageUrlParams } from "@/hooks/useManageUrlParams";
import { cn } from "@/lib/cn";

const Categories = () => {
  const {
    currentValueParams: categoryParams,
    setAndPushUrlParams: AddCategoryToUrlParams,
  } = useManageUrlParams({
    paramName: CATEGORY_PARAM,
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-2 bg-gray-200 p-3 ">
      {categories.map((category) => (
        <div
          key={category.slug}
          onClick={() => AddCategoryToUrlParams(category.slug)}
          className={cn(
            "flex gap-2 items-center justify-center rounded-sm text-gray-800 text-sm py-1 cursor-pointer",
            {
              "bg-yellow-400": category.slug === categoryParams,
            }
          )}
        >
          {category.icon}
          <span className="text-xl">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
