"use client";

import { Card, CardContent } from "@/shared/ui/card";
import { getCategoryList } from "../model/category-list";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Category } from "../model/types";

export function CategorySection() {
  const [categories, setCategories] = useState<Category[] | null>();

  useEffect(() => {
    (async () => {
      const categories = await getCategoryList();
      setCategories(categories);
    })();
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories?.map((category) => (
            <Link
              href={`/category/${category.path.toLowerCase()}`}
              key={category.path}
            >
              <Card className="hover:shadow-lg transition-shadow duration-200 bg-white cursor-pointer">
                <CardContent className="p-4 text-center">
                  <span
                    dangerouslySetInnerHTML={{ __html: category.icon }}
                    className="inline-flex"
                  />
                  <h3 className="font-medium mb-1">{category.name}</h3>
                  {/* <div className="text-sm text-gray-500">
                  {category.count}개의 리소스
                </div> */}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
