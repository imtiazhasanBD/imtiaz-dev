"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaLinkedin, FaTwitter, FaWhatsapp, FaLink, FaCheck, FaRegCopy } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";

export function ShareButtons({ title, slug }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return `https://imtiazdev.com/blog/${slug}`;
  };

  const copyToClipboard = () => {
    const url = getUrl();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.success("Article link copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const shareUrls = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      typeof window !== "undefined" ? window.location.href : ""
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(
      typeof window !== "undefined" ? window.location.href : ""
    )}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${title} - ` + (typeof window !== "undefined" ? window.location.href : "")
    )}`,
  };

  return (
    <div className="flex flex-wrap items-center gap-3 py-4 border-y border-gray-200 dark:border-gray-800 my-8">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">
        <LuShare2 className="text-base text-customGreen" />
        Share this article:
      </span>

      <a
        href={shareUrls.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] transition-colors"
        aria-label="Share on LinkedIn"
      >
        <FaLinkedin /> LinkedIn
      </a>

      <a
        href={shareUrls.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors"
        aria-label="Share on Twitter / X"
      >
        <FaTwitter /> X (Twitter)
      </a>

      <a
        href={shareUrls.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp /> WhatsApp
      </a>

      <button
        onClick={copyToClipboard}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-gray-300 dark:border-gray-700 hover:border-customGreen text-gray-700 dark:text-gray-300 transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <>
            <FaCheck className="text-customGreen" /> Copied!
          </>
        ) : (
          <>
            <FaLink /> Copy Link
          </>
        )}
      </button>
    </div>
  );
}

export function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-6 rounded-xl overflow-hidden border border-gray-700/80 bg-[#17171C] text-gray-200 text-sm font-mono shadow-md">
      <div className="flex items-center justify-between px-4 py-2 bg-[#202028] border-b border-gray-700/70 text-xs text-gray-400">
        <span className="font-semibold text-customGreen uppercase tracking-wider">{language || "code"}</span>
        <button
          onClick={copyCode}
          className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <FaCheck className="text-customGreen" /> Copied
            </>
          ) : (
            <>
              <FaRegCopy /> Copy
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-xs sm:text-sm leading-relaxed">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}
