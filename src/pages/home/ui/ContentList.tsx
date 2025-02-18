"use client";

import { useState } from "react";
import { Heart, ThumbsUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card/ui/card";
import { Badge } from "@/shared/ui/badge/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select/ui/select";
import { Button } from "@/shared/ui/button";

const contentList = [
  {
    id: 1,
    type: "책",
    title: "Python 머신러닝 완벽 가이드",
    likes: 450,
    date: "2023-06-15",
    tags: ["Python", "ML"],
    level: "주니어",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 2,
    type: "유튜브",
    title: "Docker 기초부터 실전까지",
    likes: 320,
    date: "2023-06-18",
    tags: ["Docker", "DevOps"],
    level: "미들",
    image: "/placeholder.svg?height=150&width=250",
  },
  {
    id: 3,
    type: "블로그",
    title: "GraphQL vs REST API",
    likes: 280,
    date: "2023-06-20",
    tags: ["API", "Backend"],
    level: "시니어",
    image: "/placeholder.svg?height=150&width=250",
  },
  // Add more content items as needed
];

export default function ContentList() {
  const [filter, setFilter] = useState({ tag: "", level: "" });
  const [sort, setSort] = useState("popular");

  const filteredContent = contentList
    .filter(
      (content) =>
        (filter.tag === "" || content.tags.includes(filter.tag)) &&
        (filter.level === "" || content.level === filter.level)
    )
    .sort((a, b) =>
      sort === "popular"
        ? b.likes - a.likes
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold hidden">IT 콘텐츠 목록</h2>
        <div className="flex justify-between w-full">
          <div className="flex space-x-4">
            <Select
              onValueChange={(value) => setFilter({ ...filter, tag: value })}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="태그 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">모든 태그</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="ML">ML</SelectItem>
                <SelectItem value="Docker">Docker</SelectItem>
                <SelectItem value="DevOps">DevOps</SelectItem>
                <SelectItem value="API">API</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) => setFilter({ ...filter, level: value })}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="레벨 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">모든 레벨</SelectItem>
                <SelectItem value="입문자">입문자</SelectItem>
                <SelectItem value="주니어">주니어</SelectItem>
                <SelectItem value="미들">미들</SelectItem>
                <SelectItem value="시니어">시니어</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Select onValueChange={setSort}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">인기순</SelectItem>
              <SelectItem value="recent">최신순</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((content) => (
          <Card key={content.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <img
                src={content.image || "/placeholder.svg"}
                alt={content.title}
                className="w-full h-32 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2">
                {content.type}
              </Badge>
              <CardTitle className="text-lg mb-2">{content.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mb-2">
                {content.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Badge>{content.level}</Badge>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <Button variant="ghost" size="sm" className="text-red-500">
                {content.type === "책" ? (
                  <ThumbsUp className="h-4 w-4 mr-1" />
                ) : (
                  <Heart className="h-4 w-4 mr-1" />
                )}
                <span>{content.likes}</span>
              </Button>
              <span className="text-sm text-gray-500">{content.date}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
