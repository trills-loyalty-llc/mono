import type { HealthCheckResponse } from "../../data/api-client";

export const AppStatusIndex: React.FC<AppStatusIndexProperties> = ({
  data,
}: AppStatusIndexProperties) => {
  const keys: Array<string> = [];
  for (const key in data.entries) {
    keys.push(key);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((recordKey) => {
            return (
              <tr key={recordKey}>
                <td>{data.entries[recordKey].description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

interface AppStatusIndexProperties {
  data: HealthCheckResponse;
}
