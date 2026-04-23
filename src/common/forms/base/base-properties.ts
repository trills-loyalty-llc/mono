import type DerivedProperties from "../derived/interfaces/derived-properties";

export default interface BaseProperties extends DerivedProperties {
  pattern?: string;
  type: string;
}
