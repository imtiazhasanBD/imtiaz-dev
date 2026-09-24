import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "../data/data";
import { LuCalendar, LuClock, LuArrowRight } from "react-icons/lu";

const BlogSection = () => {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-white dark:bg-customBg dark:text-white p-4 sm:p-10 lg:p-16 rounded-lg shadow-md w-full mt-6 relative overflow-hidden">
      {/* Header Badge & Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="flex items-center text-customGreen before:content-[''] before:block before:w-[7px] before:h-[7px] before:bg-customGreen before:rounded-full before:mr-2 text-sm font-medium tracking-wider uppercase">
            Articles & Insights
          </h2>
          <h2 className="text-2xl lg:text-4xl font-medium mt-1">
            Latest Blog Posts
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-2xl mt-2">
            Engineering insights, full-stack architectures, real-time WebRTC systems, and Linux VPS DevOps guides.
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-customGreen hover:text-customLiteGreen border border-customGreen/40 hover:border-customGreen px-4 py-2 rounded-lg transition-all duration-300 w-fit"
        >
          <span>View All Articles</span>
          <LuArrowRight className="text-base" />
        </Link>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredBlogs.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col justify-between rounded-md border border-gray-200 dark:border-gray-700/80 bg-gray-50 dark:bg-costomGaryLite/30 p-4 sm:p-5 hover:border-customGreen dark:hover:border-customGreen transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <div>
              {/* Blog Thumbnail */}
              <Link
                href={`/blog/${post.slug}`}
                className="block relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-gray-900 border border-gray-200/80 dark:border-gray-700/60 shadow-inner"
              >
                <Image
                  src={post.thumbnail || post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/75 backdrop-blur-md text-customLiteGreen border border-customGreen/40 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Read Time & Date info */}
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2.5 px-0.5">
                <span className="flex items-center gap-1">
                  <LuCalendar className="text-xs text-customGreen" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <LuClock className="text-xs text-customGreen" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-customGreen transition-colors duration-200 line-clamp-2 mb-2.5 leading-snug">
                  {post.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 sm:line-clamp-3 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded bg-gray-200/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300/40 dark:border-gray-700/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer CTA Link */}
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700/60 flex items-center justify-between text-xs">
                <span className="text-gray-500 dark:text-gray-400 font-medium">By {post.author.name}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 font-semibold text-customGreen group-hover:underline"
                >
                  <span>Read Article</span>
                  <LuArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
