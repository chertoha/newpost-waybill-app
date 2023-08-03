import Select from "components/UIKit/Select";
import { ChangeEvent, useState } from "react";
import { useGetSettlementsQuery } from "redux/warehouse/warehouseApi";
import { settlementsListTransform } from "utils/settlementsListTransform";

const Warehouse = () => {
  const [selectValue, setSelectValue] = useState<string>("");

  const { data: response } = useGetSettlementsQuery(selectValue);

  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSelectValue(e.target.value);
  };

  if (!response) return null;

  const settlements = settlementsListTransform(response.data);

  // console.log(response);
  return (
    <div>
      <h1>Список відділень</h1>
      <div style={{ display: "flex" }}>
        <Select
          list={settlements}
          value={selectValue}
          onSelectChange={onSelectChange}
        />
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
