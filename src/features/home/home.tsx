import DatePicker, { DateObject } from "react-multi-date-picker";
import {
  TextInput,
  useDate,
  useText,
  Form,
  DateInput,
  Columns,
} from "../../common";
import { useEffect, useState } from "react";

export const Home: React.FC = () => {
  const name = useText();
  const date = useDate();

  const [dates, setDates] = useState<Array<DateObject>>([]);

  useEffect(() => {
    console.log(dates);
  }, [dates]);

  return (
    <>
      <Columns>
        <h2>Home!</h2>
        <Form legend="Sign Up" inputs={[name, date]}>
          <TextInput label="Name" useInput={name} />
          <DateInput label="Date" useInput={date} />
        </Form>
      </Columns>
      <div>
        <DatePicker multiple value={dates} onChange={setDates} />
      </div>
    </>
  );
};
