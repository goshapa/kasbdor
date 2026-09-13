import { notFound } from "next/navigation";
import { specialists, getSpecialist } from "@/lib/data";
import SpecialistPageClient from "./SpecialistPageClient";

export function generateStaticParams() {
  return specialists.map((s) => ({ id: s.id }));
}

export default async function SpecialistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!getSpecialist(id)) {
    notFound();
  }

  return <SpecialistPageClient id={id} />;
}
