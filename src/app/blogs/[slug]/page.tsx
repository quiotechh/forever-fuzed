import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs } from "@/app/blogs/data";
import BlogPost from "@/components/BlogPost";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${post.subtitle}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) notFound();

  return <BlogPost post={post} />;
}
