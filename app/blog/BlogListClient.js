"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuCalendar, LuClock, LuArrowRight, LuSearch, LuTag, LuX } from "react-icons/lu";

export default function BlogListClient({ initialBlogs, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [initialBlogs, selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="space-y-10">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between p-4 sm:p-6 rounded-xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-customBg shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1">
          <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search articles by title, topic, or #tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-costomGaryLite/40 text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-customGreen transition-colors text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              aria-label="Clear search"
            >
              <LuX className="text-base" />
            </button>
          )}
        </div>

        {/* Count indicator */}
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 self-center">
          Showing <span className="text-customGreen font-semibold">{filteredBlogs.length}</span> of {initialBlogs.length} articles
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 items-center">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-customGreen text-black font-semibold shadow-md shadow-customGreen/20"
                  : "border border-gray-300 dark:border-gray-700 bg-white dark:bg-customBg text-gray-700 dark:text-gray-300 hover:border-customGreen hover:text-customGreen"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Blog Cards Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-customBg p-4 sm:p-5 hover:border-customGreen dark:hover:border-customGreen transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-sm"
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
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-customGreen transition-colors duration-200 line-clamp-2 mb-2.5 leading-snug">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 sm:line-clamp-3 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-costomGaryLite/60 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700/60 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                    <LuCalendar className="text-xs" />
                    {post.date}
                  </span>

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
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-customBg/50">
          <div className="inline-flex p-4 rounded-full bg-gray-100 dark:bg-costomGaryLite text-gray-400 mb-4">
            <LuSearch className="text-3xl" />
          </div>
          <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
            No articles found
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
            We couldn&apos;t find any articles matching &ldquo;{searchQuery || selectedCategory}&rdquo;. Try another keyword or clear filters.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-sm font-medium bg-customGreen text-black rounded-lg hover:bg-customLiteGreen transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
