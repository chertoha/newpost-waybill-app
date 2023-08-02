import { useGetStatusQuery } from "redux/waybill/waybillApi";

const WaybillInfo = () => {
  // const { data } = useGetStatusQuery("20700155923660"); // created but not received
  // const { data } = useGetStatusQuery("59000988138658"); // received
  const { data } = useGetStatusQuery("20700655923660"); // not found

  console.log(data);

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
