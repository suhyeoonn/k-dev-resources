"use server";

import fs from "fs";
import path from "path";

type ResourceType = "free-book" | "site";
type Level = "입문자" | "주니어" | "미드레벨" | "시니어";

export interface Resource {
  title: string;
  link: string;
  type: ResourceType;
  level: Level[];
}

export const getContentList = async (): Promise<Resource[]> => {
  try {
    const filePath = path.join(process.cwd(), "/resources/Go.md");
    const markdown = fs.readFileSync(filePath, "utf8");

    const regex =
      /- \[(.+?)\]\((.+?)\)\n\s+- type: (.+?)\n\s+- level: \[(.+?)\]/g;
    const resources = [];

    let match;
    while ((match = regex.exec(markdown)) !== null) {
      const [, title, link, type, level] = match;
      resources.push({
        title,
        link,
        type: type as ResourceType,
        level: level.split(", ").map((item) => item.trim() as Level), // 여러 개의 레벨 처리
      });
    }

    return resources;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
