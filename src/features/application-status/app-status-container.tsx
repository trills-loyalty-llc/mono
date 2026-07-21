import {
  dataClient,
  defaultHealthCheckResponse,
  useDataFetch,
} from "../../data";
import { AppStatusIndex } from "./app-status-index";

export const AppStatusContainer: React.FC = () => {
  const data = useDataFetch(
    defaultHealthCheckResponse,
    dataClient().health.healthCheck,
  );

  return <AppStatusIndex data={data.value} />;
};
