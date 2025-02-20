import { TextInput } from "../../common";
import { BaseInput } from "../../common/forms/base/base-input";
import { Form } from "../../common/forms/form/form";
import useDate from "../../common/forms/hooks/use-date";
import useInput from "../../common/forms/hooks/use-input";

export const Home: React.FC = () => {
  const name = useInput<string>("", (x) => x);
  const date = useDate();

  return (
    <div className="container">
      <h2>Home!</h2>
      <div className="columns">
        <div className="column is-one-fifth"></div>
        <div className="column">
          <Form legend="Sign Up">
            <TextInput label="Name" useInput={name} />
            <BaseInput type="date" label="Date" useInput={date} />
          </Form>
        </div>
        <div className="column is-one-fifth"></div>
      </div>
    </div>
  );
};
