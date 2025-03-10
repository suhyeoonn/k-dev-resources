"use server";

import fs from "fs";
import path from "path";
import { Category } from "./types";

export const getCategoryList = async (): Promise<Category[]> => {
  const filePath = path.join(process.cwd(), "README.md");
  const markdown = fs.readFileSync(filePath, "utf8");

  // 마크다운에서 링크 정보 추출
  const linkRegex = /- (\S+|<img.+>)\s\[(.+?)\]\(resources\/(.+?).md\)/g;
  const links = [];

  let match;
  while ((match = linkRegex.exec(markdown)) !== null) {
    const [, icon, name, path] = match;
    links.push({ name, icon, path });
  }

  return links;
};
