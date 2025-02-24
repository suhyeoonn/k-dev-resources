"use client";

import { useState } from "react";
import { Card, CardContent } from "@/shared/ui/card";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/shared/ui/command";
// import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { Button } from "@/shared/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/shared/utils/cn";

const categories = [
  {
    id: 1,
    name: "JavaScript",
    icon: "🟨",
    count: 156,
  },
  {
    id: 2,
    name: "PHP",
    icon: "🐘",
    count: 89,
  },
  {
    id: 3,
    name: "Python",
    icon: "🐍",
    count: 234,
  },
  {
    id: 4,
    name: "Java",
    icon: "☕",
    count: 178,
  },
];

export function CategorySection() {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredCategories = selectedCategory
    ? categories.filter((category) => category.name === selectedCategory)
    : categories;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* <div className="max-w-xs mx-auto mb-12">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {selectedCategory
                  ? categories.find(
                      (category) => category.name === selectedCategory
                    )?.name
                  : "카테고리 선택"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="카테고리 검색..." />
                <CommandList>
                  <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem
                      key="all"
                      onSelect={() => {
                        setSelectedCategory("");
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          !selectedCategory ? "opacity-100" : "opacity-0"
                        )}
                      />
                      전체
                    </CommandItem>
                    {categories.map((category) => (
                      <CommandItem
                        key={category.id}
                        onSelect={() => {
                          setSelectedCategory(category.name);
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedCategory === category.name
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {category.icon} {category.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div> */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCategories.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-lg transition-shadow duration-200 bg-white cursor-pointer"
            >
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-medium mb-1">{category.name}</h3>
                <div className="text-sm text-gray-500">
                  {category.count}개의 리소스
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
