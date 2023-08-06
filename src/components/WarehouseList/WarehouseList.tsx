import Spinner from "components/UIKit/Spinner";
import SubTitle from "components/UIKit/SubTitle";
import { FC, useEffect, useRef, useState } from "react";
import { useLazyGetWarehousesQuery } from "redux/warehouse/warehouseApi";
import { StorageService } from "services/StorageService";
import { IWarehouse } from "types/types";
import {
  Item,
  List,
  ListWrapper,
  LoadMoreBtn,
  SpinnerWrapper,
} from "./WarehouseList.styled";

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
  const [totalCount, setTotalCount] = useState<number>(0);
  const currentCityRef = useRef<string | null>(null);

  const increasePage = () => {
    setPage((prevState) => prevState + 1);
  };

  const [fetchWarehouses, { isFetching }] = useLazyGetWarehousesQuery();

  useEffect(() => {
    const fetchList = async (requestedRef: string, page: number) => {
      const { data: response } = await fetchWarehouses({
        cityRef: requestedRef,
        page: page.toString(),
      });
      // console.log(response);

      const info = response?.info;
      const count = info?.totalCount;
      if (!count) return;
      setTotalCount(count);

      const warehouses = response?.data;
      if (!warehouses) return;
      setList((prevList) => [...prevList, ...warehouses]);
      storage.set({ page, list: [...list, ...warehouses] });
    };

    if (!cityRef) return;

    if (currentCityRef.current !== cityRef) {
      currentCityRef.current = cityRef;
      setPage(1);
      setList([]);
      storage.remove();
      return;
    }

    const storagePage = storage.get()?.page;

    if (page === storagePage && cityRef === currentCityRef.current) {
      return;
    }

    fetchList(cityRef, page);
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

      {cityRef &&
        list.length !== totalCount &&
        (isFetching ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          <LoadMoreBtn type="button" onClick={increasePage}>
            Завантажити ще
          </LoadMoreBtn>
        ))}
    </ListWrapper>
  );
};

export default WarehouseList;
