import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs } from "../../data/data";
import { ShareButtons } from "./ArticleClient";
import ArticleRenderer from "./ArticleRenderer";
import { LuCalendar, LuClock, LuArrowLeft, LuArrowRight, LuTag } from "react-icons/lu";
import { FaHandshake, FaGithub } from "react-icons/fa";

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found - Imtiaz Hasan",
    };
  }

  const postImage = post.coverImage || "/images/hero.webp";

  return {
    title: `${post.title} - Imtiaz Hasan`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author?.name || "Imtiaz Hasan"],
      tags: post.tags,
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [postImage],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage
      ? `https://www.imtiazhasan.dev${post.coverImage}`
      : "https://www.imtiazhasan.dev/images/hero.webp",
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author?.name || "Imtiaz Hasan",
      url: "https://www.imtiazhasan.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Imtiaz Hasan",
      url: "https://www.imtiazhasan.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.imtiazhasan.dev/blog/${post.slug}`,
    },
  };

  // Related posts (same category or others, excluding current)
  const relatedPosts = blogs
    .filter((b) => b.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="text-black dark:text-white w-[95%] sm:w-[85%] mx-auto h-auto md:w-[700px] lg:w-[850px] xl:w-[950px] mt-8 md:mt-16">
        {/* Back Button & Breadcrumbs */}
        <div className="flex items-center justify-between gap-4 mb-8 text-xs sm:text-sm">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-customGreen transition-colors group"
        >
          <LuArrowLeft className="text-base group-hover:-translate-x-1 transition-transform" />
          <span>Back to all articles</span>
        </Link>

        <div className="hidden sm:flex items-center gap-2 text-gray-400 text-xs">
          <Link href="/" className="hover:text-customGreen">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-customGreen">Blog</Link>
          <span>/</span>
          <span className="text-customGreen truncate max-w-[200px]">{post.category}</span>
        </div>
      </div>

      {/* Article Header Card */}
      <header className="p-6 sm:p-10 rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-customBg shadow-sm mb-8">
        {/* Category & Read Time */}
        <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
          <span className="px-3 py-1 rounded-md font-semibold bg-customGreen/10 text-customGreen border border-customGreen/30">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <LuClock className="text-sm text-customGreen" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <LuCalendar className="text-sm text-customGreen" />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt Lead */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-customGreen pl-4 py-1">
          &ldquo;{post.excerpt}&rdquo;
        </p>

        {/* Author Line */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-6 mt-6 border-t border-gray-200 dark:border-gray-700/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-customGreen/20 border border-customGreen flex items-center justify-center text-customGreen font-bold">
              IH
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-cuntomPink">
                Full Stack Developer | WebRTC & DevOps
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {post.githubRepo && (
              <a
                href={post.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-costomGaryLite hover:border-customGreen text-gray-800 dark:text-gray-200 hover:text-customGreen transition-colors"
              >
                <FaGithub className="text-sm" />
                <span>GitHub Repo</span>
              </a>
            )}
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-0.5 rounded bg-gray-100 dark:bg-costomGaryLite text-gray-700 dark:text-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Featured Cover Thumbnail */}
      <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-8 border border-gray-300 dark:border-gray-800 shadow-md bg-gray-900">
        <Image
          src={post.coverImage || post.thumbnail}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 950px"
          className="object-cover"
        />
      </div>

      {/* Main Content Box */}
      <div className="p-6 sm:p-10 rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-customBg shadow-sm">
        <ArticleRenderer content={post.content} />

        {/* Share Buttons */}
        <ShareButtons title={post.title} slug={post.slug} />

        {/* Author Bio Box */}
        <div className="p-6 rounded-md bg-gray-50 dark:bg-costomGaryLite/40 border border-gray-200 dark:border-gray-700/70 flex flex-col sm:flex-row items-center gap-5 my-8">
          <div className="w-16 h-16 rounded-full bg-customGreen/20 border-2 border-customGreen flex-shrink-0 flex items-center justify-center text-customGreen font-bold text-xl">
            IH
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              Written by Imtiaz Hasan
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
              Full Stack Developer specializing in Next.js, Nest.js, real-time audio/video with WebRTC & Agora, n8n automations, and Linux VPS DevOps deployments.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-3 text-xs font-medium">
              <Link href="/contact" className="text-customGreen hover:underline flex items-center gap-1">
                <FaHandshake /> Get In Touch
              </Link>
              <Link href="/projects" className="text-gray-500 dark:text-gray-400 hover:text-white">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Related Articles
            </h2>
            <Link
              href="/blog"
              className="text-xs sm:text-sm text-customGreen hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.slug}`}
                className="group p-4 sm:p-5 rounded-md border border-gray-300 dark:border-gray-800 bg-white dark:bg-customBg hover:border-customGreen dark:hover:border-customGreen transition-all duration-300 hover:-translate-y-1 block shadow-sm"
              >
                <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-3.5 bg-gray-900 border border-gray-200 dark:border-gray-700/60">
                  <Image
                    src={related.thumbnail || related.coverImage}
                    alt={related.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 z-10">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-black/75 backdrop-blur-sm text-customLiteGreen border border-customGreen/30">
                      {related.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span>{related.date}</span>
                  <span>{related.readTime}</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-customGreen transition-colors line-clamp-2 mb-2 leading-snug">
                  {related.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                  {related.excerpt}
                </p>
                <div className="flex items-center gap-1 text-xs text-customGreen font-medium">
                  <span>Read Post</span>
                  <LuArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  </>
  );
}

