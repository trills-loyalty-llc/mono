import useDataFetch from "../../../common/hooks/use-data-fetch/use-data-fetch";
import type { GetAllOperatorsResponse } from "../../../data/api-client";
import dataClient from "../../../data/data-client";
import { OperatorIndex } from "./operator-index";

export const OperatorIndexContainer: React.FC = () => {
  const operators = useDataFetch<GetAllOperatorsResponse>(
    {
      entities: [],
    },
    dataClient().operator.getAllOperators,
  );

  return <OperatorIndex operators={operators.value.entities} />;
};
