import React from "react";
import { BaseInput } from "../../base/base-input";
import type DerivedProperties from "../interfaces/derived-properties";

export const DateInput: React.FC<DerivedProperties> = ({
  label,
  useInput,
}: DerivedProperties) => {
  return <BaseInput type="date" label={label} useInput={useInput} />;
};
