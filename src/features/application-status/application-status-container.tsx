import { useCallback } from "react";
import {
  dataClient,
  defaultHealthCheckResponse,
  useDataFetch,
} from "../../data";
import { ApplicationStatusIndex } from "./application-status-index";

export const ApplicationStatusContainer: React.FC = () => {
  const data = useDataFetch(
    defaultHealthCheckResponse,
    useCallback(dataClient().healthCheck.healthCheck, []),
  );

  return <ApplicationStatusIndex data={data.value} />;
};
