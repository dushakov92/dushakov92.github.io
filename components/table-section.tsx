import { Table } from "@radix-ui/themes";
import SVG from "react-inlinesvg";

interface TableSectionProps {
  header?: string;
  availableInFree?: boolean;
  availableInPro?: boolean;
  childrenFree?: React.ReactNode;
  childrenPro?: React.ReactNode;
}

export const TableSection = ({
  header = "",
  availableInFree = false,
  availableInPro = true,
  childrenFree,
  childrenPro,
}: TableSectionProps) => {
  return (
    <Table.Row>
      <Table.RowHeaderCell className="align-middle!">
        {header}
      </Table.RowHeaderCell>
      <Table.Cell className="align-middle!">
        {!childrenFree ? (
          availableInFree ? (
            <SVG className="w-5 text-green-700" src="/images/check.svg" />
          ) : (
            <SVG className="w-5 text-red-700" src="/images/ban.svg" />
          )
        ) : (
          childrenFree
        )}
      </Table.Cell>
      <Table.Cell className="align-middle!">
        {!childrenPro ? (
          availableInPro ? (
            <SVG className="w-5 text-green-700" src="/images/check.svg" />
          ) : (
            <SVG className="w-5 text-red-700" src="/images/ban.svg" />
          )
        ) : (
          childrenPro
        )}
      </Table.Cell>
    </Table.Row>
  );
};
