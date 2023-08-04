import { FC, useEffect, useState } from "react";
import { useGetWarehousesQuery } from "redux/warehouse/warehouseApi";
import { StorageService } from "services/StorageService";
import { IWarehouse } from "types/types";

// const storage = new StorageService<{ page: number; list: IWarehouse[] }>(
//   "warehouseList"
// );

interface IWarehouseListProps {
  cityRef: string | null;
}

const WarehouseList: FC<IWarehouseListProps> = ({ cityRef }) => {
  //   const [list, setList] = useState<IWarehouse[]>(
  //     () => storage.get()?.list || []
  //   );
  const [page, setPage] = useState<number>(1);

  const increasePage = () => {
    setPage((prevState) => prevState + 1);
  };

  const { data: response } = useGetWarehousesQuery(
    { cityRef, page: page.toString() },
    {
      skip: cityRef ? false : true,
    }
  );

  if (!response) return null;

  //   useEffect(() => {
  //     const currentPage = storage.get()?.page;
  //     if (response && currentPage !== page) {
  //       console.log("page=", page);
  //       setList((prevList) => [...prevList, ...response.data]);
  //       storage.set({ page, list: [...list, ...response.data] });
  //     }
  //   }, [list, page, response]);

  return (
    <div style={{ backgroundColor: "#1fa3a1" }}>
      <ul>
        {response.data.map(({ Ref: ref, Description: description }) => (
          <li key={ref}>{description}</li>
        ))}
      </ul>
      <button type="button" onClick={increasePage}>
        Завантажити ще
      </button>
    </div>
  );
};

export default WarehouseList;
