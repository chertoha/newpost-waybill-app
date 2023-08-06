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

  // const [request, setRequest] = useState<string | null>()
  const [page, setPage] = useState<number>(1);
  const [list, setList] = useState<IWarehouse[]>(
    () => storage.get()?.list || []
  );

  const currentCityRef = useRef<string | null>(null);
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
    const fetchList = async (requestedRef: string, page: number) => {
      const { data: response } = await fetchWarehouses({
        cityRef: requestedRef,
        page: page.toString(),
      });

      const warehouses = response?.data;
      if (warehouses) {
        setList((prevList) => [...prevList, ...warehouses]);
        storage.set({ page, list: [...list, ...warehouses] });
      }
    };

    if (!cityRef) return;

    if (currentCityRef.current !== cityRef) {
      currentCityRef.current = cityRef;
      setPage(1);
      setList([]);
      storage.remove();

      // fetchList(cityRef, 1);

      return;
    }

    const storagePage = storage.get()?.page;

    console.log("storagePage", storagePage);

    if (page === storagePage && cityRef === currentCityRef.current) {
      return;
    }

    fetchList(cityRef, page);

    //end
  }, [fetchWarehouses, cityRef, page, list]);

  return (
    <ListWrapper>
      <SubTitle text="Список відділень" />
      <List>
        {list.map(({ Ref: ref, Description: description }) => (
          <Item key={ref}>{description}</Item>
          // <Item>{description}</Item>
        ))}
      </List>
      <LoadMoreBtn type="button" onClick={increasePage}>
        Завантажити ще
      </LoadMoreBtn>
    </ListWrapper>
  );
};

export default WarehouseList;
