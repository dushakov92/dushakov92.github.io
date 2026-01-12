import { useState, useEffect, useCallback } from "react";

export function SimpleSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalMatches, setTotalMatches] = useState(0);

  const clearHighlights = useCallback(() => {
    const marks = document.querySelectorAll("mark.search-highlight");
    marks.forEach((mark) => {
      const parent = mark.parentNode;
      if (parent) {
        parent.replaceChild(
          document.createTextNode(mark.textContent || ""),
          mark,
        );
        parent.normalize();
      }
    });
  }, []);

  const highlightText = useCallback((node: Node, term: string): number => {
    let count = 0;

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      const index = text.toLowerCase().indexOf(term.toLowerCase());

      if (index !== -1 && term.length > 0) {
        const mark = document.createElement("mark");
        mark.className = "search-highlight";
        mark.textContent = text.substring(index, index + term.length);

        const before = document.createTextNode(text.substring(0, index));
        const after = document.createTextNode(
          text.substring(index + term.length),
        );

        const parent = node.parentNode;
        if (parent) {
          parent.insertBefore(before, node);
          parent.insertBefore(mark, node);
          parent.insertBefore(after, node);
          parent.removeChild(node);
          count = 1 + highlightText(after, term);
        }
      }
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      !["SCRIPT", "STYLE", "MARK"].includes(node.nodeName) &&
      !(node as Element).classList?.contains("search-container")
    ) {
      Array.from(node.childNodes).forEach((child) => {
        count += highlightText(child, term);
      });
    }

    return count;
  }, []);

  const navigateToMatch = useCallback((index: number) => {
    const marks = document.querySelectorAll("mark.search-highlight");
    marks.forEach((mark) => mark.classList.remove("search-highlight-active"));
    marks[index]?.classList.add("search-highlight-active");
    marks[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const goToNext = () => {
    if (totalMatches === 0) return;
    const newIndex = (currentIndex + 1) % totalMatches;
    setCurrentIndex(newIndex);
    navigateToMatch(newIndex);
  };

  const goToPrev = () => {
    if (totalMatches === 0) return;
    const newIndex = (currentIndex - 1 + totalMatches) % totalMatches;
    setCurrentIndex(newIndex);
    navigateToMatch(newIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clearHighlights();
      setCurrentIndex(0);

      if (searchTerm.length < 2) {
        setTotalMatches(0);
        return;
      }

      const mainContent = document.querySelector("main");
      if (mainContent) {
        const count = highlightText(mainContent, searchTerm);
        setTotalMatches(count);
        if (count > 0) navigateToMatch(0);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, clearHighlights, highlightText, navigateToMatch]);

  useEffect(() => clearHighlights, [clearHighlights]);

  return (
    <div className="search-container flex flex-col gap-2 max-w-4/5 mt-10">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="text-sm border border-gray-600 rounded-lg outline-none bg-gray-800 px-3 py-2 w-full text-gray-100 placeholder-gray-400"
      />
      {searchTerm.length > 0 && (
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">
            {totalMatches > 0
              ? `${currentIndex + 1} of ${totalMatches}`
              : "No results"}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={goToPrev}
              disabled={totalMatches === 0}
              className="p-1 rounded hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-gray-400 hover:text-gray-200"
              title="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              disabled={totalMatches === 0}
              className="p-1 rounded hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-gray-400 hover:text-gray-200"
              title="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
