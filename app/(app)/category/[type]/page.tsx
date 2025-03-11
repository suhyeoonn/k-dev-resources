import { CategoryPage } from "@/pages/category";

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const type = (await params).type;
  console.log(type); // TODO:
  return <CategoryPage />;
}
