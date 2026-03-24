import { notFound } from "next/navigation";
import { servicesData } from "./data";
import ServicePageClient from "./ServicePageClient";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!servicesData[slug]) {
    notFound();
  }

  return <ServicePageClient slug={slug} />;
}
