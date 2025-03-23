import {
  TextInput,
  useDate,
  useText,
  Form,
  DateInput,
  Columns,
} from "../../common";
import { ApplicationStatusContainer } from "../application-status/application-status-container";

export const Home: React.FC = () => {
  const name = useText();
  const date = useDate();

  return (
    <>
      <Columns>
        <h2>Home!</h2>
        <Form legend="Sign Up" inputs={[name, date]}>
          <TextInput label="Name" useInput={name} />
          <DateInput label="Date" useInput={date} />
        </Form>
      </Columns>
      <ApplicationStatusContainer />
    </>
  );
};
