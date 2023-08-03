import Select from "components/UIKit/Select";
import { useGetSettlementsQuery } from "redux/warehouse/warehouseApi";
import { settlementsListTransform } from "utils/settlementsListTransform";

const Warehouse = () => {
  const { data: response } = useGetSettlementsQuery("ки");
  console.log(response);

  if (!response) return null;

  const settlements = settlementsListTransform(response.data);

  return (
    <div>
      <h1>Список відділень</h1>
      <div style={{ display: "flex" }}>
        <Select list={settlements} />
        <div style={{ backgroundColor: "#1fa3a1" }}>
          <ul>
            <li>Warehouse 1</li>
            <li>Warehouse 2</li>
            <li>Warehouse 3</li>
            <li>Warehouse 4</li>
            <li>Warehouse 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
