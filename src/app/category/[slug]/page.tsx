import { notFound } from "next/navigation";
import { categories, getCategory } from "@/lib/data";
import CategoryPageClient from "./CategoryPageClient";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getCategory(slug)) {
    notFound();
  }

  return <CategoryPageClient slug={slug} />;
}
