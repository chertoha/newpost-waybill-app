import { FC } from "react";
import { useGetStatusQuery } from "redux/waybill/waybillApi";

interface IWaybillInfoProps {
  searchedWaybill: string;
}

const WaybillInfo: FC<IWaybillInfoProps> = ({ searchedWaybill }) => {
  const { data, isFetching } = useGetStatusQuery(searchedWaybill, {
    skip: searchedWaybill ? false : true,
  });

  console.log(data);

  if (isFetching) {
    return <div>FETCHING.......</div>;
  }

  if (!data) return null;

  if (!data.success) {
    return <div>{data.errors[0]}</div>;
  }

  const {
    Status: status,
    WarehouseSender: warehouseSender,
    WarehouseRecipient: warehouseRecipient,
  } = data.waybill;

  return (
    <div style={{ backgroundColor: "#e69443" }}>
      <p>Статус доставки: {status}</p>
      {warehouseSender && <p>Місце відправлення: {warehouseSender}</p>}
      {warehouseRecipient && <p>Місце отримання: {warehouseRecipient}</p>}
    </div>
  );
};

export default WaybillInfo;
