import { Table } from "../../../common/components/table/table";
import type { OperatorResponse } from "../../../data/api-client";

export const OperatorIndex: React.FC<OperatorIndexProperties> = ({
  operators,
}: OperatorIndexProperties) => {
  const headers: Array<string> = ["Id", "Name", "Resort Count"];

  return (
    <div className="container">
      <Table headers={headers}>
        {operators.map((operator) => {
          return (
            <tr key={operator.id}>
              <td>{operator.id}</td>
              <td>{operator.name}</td>
              <td>{operator.resortCount}</td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

interface OperatorIndexProperties {
  operators: Array<OperatorResponse>;
}
