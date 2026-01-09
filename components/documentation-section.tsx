interface DocumentationSectionProps {
  header: string;
  children?: React.ReactNode;
  content?: SectionContentProps[];
}

interface SectionContentProps {
  title?: string;
  description?: React.ReactNode | string;
}

const SectionContent = ({ title, description }: SectionContentProps) => {
  if (!title && !description) return null;

  const id = title?.toLowerCase().replace(/\s+/g, "-") || "";

  return (
    <div
      id={id}
      className="flex flex-col xl:flex-row xl:gap-10 border-b border-b-gray-700 pb-10"
    >
      {title && <h4 className="xl:w-1/4 shrink-0">{title}</h4>}
      {description &&
        (typeof description === "string" &&
        /<([a-z][\s\S]*?)>/i.test(description) ? (
          <div
            className="flex-1"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div className="flex-1">{description}</div>
        ))}
    </div>
  );
};

export const DocumentationSection = ({
  header = "",
  children,
  content = [],
}: DocumentationSectionProps) => {
  const id = header.toLowerCase().replace(/\s+/g, "-");

  return (
    <section role="region" aria-labelledby={id}>
      <h3 id={id}>{header}</h3>
      {children}
      <div className="flex flex-col gap-10">
        {content &&
          content.map((item, index) => (
            <SectionContent
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>
    </section>
  );
};
