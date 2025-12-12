"use client";

import { categories } from "@/data";
import { cn } from "@/lib/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CATEGORY_PARAM = "category";

const Categories = () => {
  const searchParams = useSearchParams();
  const currentPathName = usePathname();

  const router = useRouter();

  const categoryInParams = searchParams.get(CATEGORY_PARAM);

  const AddCategoryToUrlParams = (slug: string) => {
    const currentUrlParams = new URLSearchParams(searchParams);

    currentUrlParams.set(CATEGORY_PARAM, slug || "all");

    router.push(`${currentPathName}?${currentUrlParams.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-2 bg-gray-200 p-3 ">
      {categories.map((category) => (
        <div
          key={category.slug}
          onClick={() => AddCategoryToUrlParams(category.slug)}
          className={cn(
            "flex gap-2 items-center justify-center rounded-sm text-gray-800 text-sm py-1 cursor-pointer",
            {
              "bg-yellow-400": category.slug === categoryInParams,
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
