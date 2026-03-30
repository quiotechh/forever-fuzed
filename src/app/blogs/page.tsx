import type { Metadata } from "next";
import BlogsListingClient from "@/components/BlogsListingClient";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Stories, inspiration, and behind-the-scenes insights from Forever Fuzed — perspectives on love, design, and the art of crafting unforgettable celebrations.",
};

export default function BlogsPage() {
  return <BlogsListingClient />;
}
