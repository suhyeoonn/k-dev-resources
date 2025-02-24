import { CategoryPage } from "@/pages/category";
import fs from "node:fs";
import path from "node:path";

export default function Page() {
  const folderPath = path.join(process.cwd(), "resources");
  const files = fs.readdirSync(folderPath);
  const categories = files.map((file) => file.replace(".md", ""));

  return <CategoryPage categories={categories} />;
}
