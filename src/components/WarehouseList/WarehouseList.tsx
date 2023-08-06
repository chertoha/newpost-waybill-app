import SubTitle from "components/UIKit/SubTitle";
import { FC, useEffect, useState } from "react";
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
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<IWarehouse[]>(
    () => storage.get()?.list || []
  );

  // console.log(list);

  const increasePage = () => {
    setPage((prevState) => prevState + 1);
  };

  // const { data: response } = useGetWarehousesQuery(
  //   { cityRef, page: page.toString() },
  // {
  //   skip: cityRef ? false : true,
  // }
  // );

  const [fetchWarehouses] = useLazyGetWarehousesQuery();

  useEffect(() => {
    if (!cityRef) return;
    if (page === storage.get()?.page) return;

    fetchWarehouses({ cityRef, page: page.toString() }).then(
      ({ data: response }) => {
        const warehouses = response?.data;
        if (warehouses) {
          setList((prevList) => [...prevList, ...warehouses]);
          storage.set({ page, list: [...list, ...warehouses] });
          console.log(response);
        }
      }
    );
  }, [fetchWarehouses, cityRef, page, list]);

  // useEffect(() => {
  //   const currentPage = storage.get()?.page;
  //   if (response && currentPage !== page) {
  //     console.log("page=", page);
  // setList((prevList) => [...prevList, ...response.data]);
  // storage.set({ page, list: [...list, ...response.data] });
  //   }
  // }, [list, page, response]);

  // if (!response) return null;

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
