interface DocumentationSectionProps {
  header: string;
  children?: React.ReactNode;
  content?: SectionContentProps[];
}

interface SectionContentProps {
  title?: string;
  description?: React.ReactNode | string;
}

const SectionContent = ({ title, description }: SectionContentProps) => (
  <div className="flex flex-col md:flex-row md:gap-10 xl:gap-20">
    {title && <h4 className="md:w-48 shrink-0">{title}</h4>}
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
