import {
  dataClient,
  defaultHealthCheckResponse,
  useDataFetch,
} from "../../data";
import { ApplicationStatusIndex } from "./application-status-index";

export const ApplicationStatusContainer: React.FC = () => {
  const data = useDataFetch(
    defaultHealthCheckResponse,
    dataClient().health.healthCheck,
  );

  return <ApplicationStatusIndex data={data.value} />;
};
