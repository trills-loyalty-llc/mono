import { Columns, ColumnSize } from "../../common";
import { Article } from "../../common/components/article/article";

export const Home: React.FC = () => {
  return (
    <>
      <Columns size={ColumnSize.Two}>
        <Article
          icon="bi-cash-coin"
          title="What is the cost per attraction at USF?"
          tags={["Universal", "Orlando", "Cost Breakdown"]}
        />
        <Article
          icon="bi-bar-chart-line-fill"
          title="Wednesday was the worst day for lines at Disney in a year"
          tags={["Disney", "Orlando", "Wait Times"]}
        />
        <Article
          icon="bi-person-vcard-fill"
          title="SeaWorld Orlando 2026 Annual Pass Analysis"
          tags={["SeaWorld", "Annual Passes", "Cost Breakdown"]}
        />
      </Columns>
    </>
  );
};
