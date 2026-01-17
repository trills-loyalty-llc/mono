import React from "react";
import type { RequiredChildrenProperties } from "../../interfaces/required-children";
import { Container } from "../container/container";
import { ColumnSize } from "./column-size";

export const Columns: React.FC<ColumnsProperties> = ({
  size = ColumnSize.Three,
  children,
}: ColumnsProperties) => {
  const determineSize = (): string => {
    switch (size) {
      case ColumnSize.Three: {
        return "col-3";
      }
      case ColumnSize.Four: {
        return "col-4";
      }
      default: {
        return "";
      }
    }
  };
  return (
    <Container>
      <div className="row">
        <div className={determineSize()}></div>
        <div className="col">{children}</div>
        <div className={determineSize()}></div>
      </div>
    </Container>
  );
};

interface ColumnsProperties extends RequiredChildrenProperties {
  size?: ColumnSize;
}
