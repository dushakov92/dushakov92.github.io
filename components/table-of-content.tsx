import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

export const TableOfContent = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const elements = document.querySelectorAll("h3");
    const headingData: Heading[] = Array.from(elements)
      .filter((heading) => heading.id)
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
      }));
    setHeadings(headingData);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div role="navigation" aria-label="Table of Content">
      <h2 className="font-bold text-lg mb-6">Table of Content</h2>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="no-underline! hover:underline!"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
