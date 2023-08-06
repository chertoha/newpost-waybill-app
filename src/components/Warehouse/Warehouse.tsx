import { ChangeEvent, useState } from "react";

import Select from "components/UIKit/Select";
import Title from "components/UIKit/Title";
import WarehouseList from "components/WarehouseList";
import { useGetSettlementsQuery } from "redux/warehouse/warehouseApi";
import { ISelectItem } from "types/types";
import { settlementsListTransform } from "utils/settlementsListTransform";
import { SelectWrapper, WarehouseContainer } from "./Warehouse.styled";

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
  };

  if (!response) return null;

  const settlements = selectSearch
    ? settlementsListTransform(response.data)
    : [];

  return (
    <WarehouseContainer>
      <Title text="Знайти відділення" />
      <SelectWrapper>
        <Select
          list={settlements}
          value={selectSearch}
          onSelectChange={onSelectChange}
          onSelectItemClick={onSelectItemClick}
        />
      </SelectWrapper>
      <WarehouseList cityRef={selectValue ? selectValue.id : null} />
    </WarehouseContainer>
  );
};

export default Warehouse;
