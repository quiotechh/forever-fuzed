"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/app/blogs/data";

interface Props {
  post: BlogPost;
  index: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function BlogCard({ post, index }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group flex flex-col bg-white border border-[#e8e2da] overflow-hidden hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Image */}
      <Link
        href={`/blogs/${post.slug}`}
        className="relative block h-64 overflow-hidden bg-stone-200"
      >
        <Image
          src={post.cardImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Category badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5"
          style={{ backgroundColor: post.accent }}
        >
          <span className="font-lato text-white text-[9px] tracking-[0.3em] uppercase">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8" style={{ backgroundColor: post.accent }} />
          <span
            className="font-lato text-[10px] tracking-[0.35em] uppercase"
            style={{ color: post.accent }}
          >
            {post.number}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blogs/${post.slug}`}>
          <h2 className="font-cormorant text-[#3a2e2a] text-2xl sm:text-[28px] font-light leading-[1.2] mb-1.5 group-hover:opacity-75 transition-opacity duration-300">
            {post.title}
          </h2>
          <p className="font-cormorant italic text-[#6b5f5a] text-xl font-light leading-[1.3] mb-5">
            {post.subtitle}
          </p>
        </Link>

        {/* Excerpt */}
        <p className="font-lato text-[#6b5f5a] text-sm leading-[1.9] mb-8 flex-1">
          {post.excerpt}
        </p>

        {/* CTA button */}
        <Link
          href={`/blogs/${post.slug}`}
          className="relative overflow-hidden group/btn inline-flex items-center self-start border px-7 py-3.5 transition-all duration-300"
          style={{ borderColor: post.accent, color: post.accent }}
        >
          <span
            className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"
            style={{ backgroundColor: post.accent }}
          />
          <span className="relative font-lato text-[10px] tracking-[0.3em] uppercase group-hover/btn:text-white transition-colors duration-300">
            Read More &rarr;
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
