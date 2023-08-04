import Select from "components/UIKit/Select";
import WarehouseList from "components/WarehouseList";
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

  // console.log(selectValue);
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
        <WarehouseList cityRef={selectValue ? selectValue.id : null} />
      </div>
    </div>
  );
};

export default Warehouse;
