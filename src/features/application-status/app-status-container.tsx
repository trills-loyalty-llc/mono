import useDataFetch from "../../common/hooks/use-data-fetch/use-data-fetch";
import dataClient from "../../data/data-client";
import { AppStatusIndex } from "./app-status-index";
import { defaultHealthCheckResponse } from "./default-responses";

export const AppStatusContainer: React.FC = () => {
  const data = useDataFetch(
    defaultHealthCheckResponse,
    dataClient().status.getHealthChecks,
  );

  return <AppStatusIndex data={data.value} />;
};
