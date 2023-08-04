import Select from "components/UIKit/Select";
import { ChangeEvent, useState } from "react";
import { useGetSettlementsQuery } from "redux/warehouse/warehouseApi";
import { ISelectItem } from "types/types";
import { settlementsListTransform } from "utils/settlementsListTransform";

const Warehouse = () => {
  const [selectSearch, setSelectSearch] = useState<string>("");
  const [selectValue, setSelectValue] = useState<ISelectItem | null>(null);

  const { data: response } = useGetSettlementsQuery(selectSearch);

  const onSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    setSelectSearch(value);
  };

  const onSelectItemClick = (value: ISelectItem) => {
    setSelectValue(value);
    setSelectSearch(value.title);
    // console.log(id);
  };

  if (!response) return null;

  const settlements = selectSearch
    ? settlementsListTransform(response.data)
    : [];

  console.log(selectValue);
  // console.log(response);
  return (
    <div>
      <h1>Список відділень</h1>
      <div style={{ display: "flex" }}>
        <Select
          list={settlements}
          value={selectSearch}
          onSelectChange={onSelectChange}
          onSelectItemClick={onSelectItemClick}
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
