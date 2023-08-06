import SubTitle from "components/UIKit/SubTitle";
import { FC, useEffect, useRef, useState } from "react";
import { useLazyGetWarehousesQuery } from "redux/warehouse/warehouseApi";
import { StorageService } from "services/StorageService";
import { IWarehouse } from "types/types";
import { Item, List, ListWrapper, LoadMoreBtn } from "./WarehouseList.styled";

const storage = new StorageService<{ page: number; list: IWarehouse[] }>(
  "warehouseList"
);

interface IWarehouseListProps {
  cityRef: string | null;
}

const WarehouseList: FC<IWarehouseListProps> = ({ cityRef }) => {
  // const [currentCityRef, setCurrentCityRef] = useState<string | null>(
  //   () => cityRef
  // );
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<IWarehouse[]>(
    () => storage.get()?.list || []
  );

  // useEffect(() => {
  //   if (cityRef !== currentCityRef) {
  //     setPage(1);
  //     setList([]);
  //     storage.remove();
  //     setCurrentCityRef(cityRef);
  //   }
  // }, [cityRef, currentCityRef]);

  const increasePage = () => {
    setPage((prevState) => prevState + 1);
  };

  const [fetchWarehouses] = useLazyGetWarehousesQuery();

  useEffect(() => {
    if (!cityRef) return;
    if (page === storage.get()?.page) return;
    // if (cityRef === currentCityRef) return;

    fetchWarehouses({
      cityRef,
      page: page.toString(),
    }).then(({ data: response }) => {
      const warehouses = response?.data;
      if (warehouses) {
        setList((prevList) => [...prevList, ...warehouses]);
        storage.set({ page, list: [...list, ...warehouses] });
        console.log(response);
      }
    });
  }, [fetchWarehouses, cityRef, page, list]);

  return (
    <ListWrapper>
      <SubTitle text="Список відділень" />
      <List>
        {list.map(({ Ref: ref, Description: description }) => (
          <Item key={ref}>{description}</Item>
        ))}
      </List>
      <LoadMoreBtn type="button" onClick={increasePage}>
        Завантажити ще
      </LoadMoreBtn>
    </ListWrapper>
  );
};

export default WarehouseList;
