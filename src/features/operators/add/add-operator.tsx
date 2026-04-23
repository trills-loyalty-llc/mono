import {
  Columns,
  ColumnSize,
  DescriptionInput,
  Form,
  IdentifierInput,
  useText,
} from "../../../common";

export const AddOperator: React.FC = () => {
  const description = useText();
  const identifier = useText();

  return (
    <Columns size={ColumnSize.Two}>
      <Form legend="Add Operator" inputs={[description, identifier]}>
        <DescriptionInput useInput={description} />
        <IdentifierInput useInput={identifier} />
      </Form>
    </Columns>
  );
};
