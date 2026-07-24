import type { ReactNode } from "react";

export const Table: React.FC<TableProperties> = ({
  children,
  headers,
}: TableProperties) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {headers.map((header) => {
            return <th key={header}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

interface TableProperties {
  children: ReactNode;
  headers: Array<string>;
}
