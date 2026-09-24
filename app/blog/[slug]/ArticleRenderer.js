import React from "react";
import { CodeBlock } from "./ArticleClient";

// Formats inline markdown like **bold** and `inline-code`
function formatInlineText(text) {
  const parts = [];
  let remaining = text;
  let key = 0;

  // Regular expression to match **bold** or `code`
  const regex = /(\*\*[^*]+\*\*|`[^`]+`)/;

  while (remaining) {
    const match = remaining.match(regex);
    if (!match) {
      parts.push(remaining);
      break;
    }

    const matchIndex = match.index;
    if (matchIndex > 0) {
      parts.push(remaining.substring(0, matchIndex));
    }

    const matchedStr = match[0];
    if (matchedStr.startsWith("**") && matchedStr.endsWith("**")) {
      parts.push(
        <strong key={key++} className="font-semibold text-gray-900 dark:text-white">
          {matchedStr.slice(2, -2)}
        </strong>
      );
    } else if (matchedStr.startsWith("`") && matchedStr.endsWith("`")) {
      parts.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-[#1E1E24] text-cuntomPink dark:text-customLiteGreen font-mono text-xs sm:text-sm border border-gray-300 dark:border-gray-700/60"
        >
          {matchedStr.slice(1, -1)}
        </code>
      );
    }

    remaining = remaining.substring(matchIndex + matchedStr.length);
  }

  return parts;
}

export default function ArticleRenderer({ content }) {
  // Split raw content into lines and process blocks
  const lines = content.trim().split("\n");
  const elements = [];
  let i = 0;
  let elKey = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check for Code Block (```lang)
    if (line.trim().startsWith("```")) {
      const language = line.trim().replace(/^```/, "").trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <CodeBlock
          key={elKey++}
          language={language || "javascript"}
          code={codeLines.join("\n")}
        />
      );
      continue;
    }

    // Check for Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={elKey++}
          className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4 border-l-4 border-customGreen pl-3"
        >
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("#### ")) {
      elements.push(
        <h4
          key={elKey++}
          className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-100 mt-6 mb-3"
        >
          {line.replace("#### ", "")}
        </h4>
      );
      i++;
      continue;
    }

    // Check for Table (| col | col |)
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      const tableLines = [];
      while (
        i < lines.length &&
        lines[i].trim().startsWith("|") &&
        lines[i].trim().endsWith("|")
      ) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .split("|")
          .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
          .map((c) => c.trim());

        const bodyRows = tableLines.slice(2).map((r) =>
          r
            .split("|")
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
            .map((c) => c.trim())
        );

        elements.push(
          <div
            key={elKey++}
            className="my-6 overflow-x-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-sm"
          >
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-gray-100 dark:bg-[#1E1E24] text-gray-800 dark:text-gray-200 border-b border-gray-300 dark:border-gray-700">
                <tr>
                  {headerRow.map((h, hIdx) => (
                    <th key={hIdx} className="px-4 py-3 font-semibold">
                      {formatInlineText(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700/60">
                {bodyRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="hover:bg-gray-50 dark:hover:bg-costomGaryLite/30 transition-colors"
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-gray-600 dark:text-gray-300">
                        {formatInlineText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Check for List item (- item or * item)
    if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
      const listItems = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        listItems.push(lines[i].trim().substring(2));
        i++;
      }
      elements.push(
        <ul key={elKey++} className="space-y-2 my-4 pl-4">
          {listItems.map((item, lIdx) => (
            <li
              key={lIdx}
              className="flex items-start gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-customGreen mt-2 flex-shrink-0"></span>
              <span>{formatInlineText(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Check for Numbered List
    if (/^\d+\.\s/.test(line.trim())) {
      const listItems = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={elKey++} className="space-y-2 my-4 pl-4 list-decimal list-inside">
          {listItems.map((item, lIdx) => (
            <li
              key={lIdx}
              className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {formatInlineText(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Standard paragraph or empty line
    if (line.trim()) {
      elements.push(
        <p
          key={elKey++}
          className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed my-4"
        >
          {formatInlineText(line)}
        </p>
      );
    }

    i++;
  }

  return <div className="article-body space-y-2">{elements}</div>;
}
