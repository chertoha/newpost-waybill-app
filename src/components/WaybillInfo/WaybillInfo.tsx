import { FC } from "react";
import { useGetStatusQuery } from "redux/waybill/waybillApi";
import { InfoItem, InfoItemTitle } from "./WaybillInfo.styled";

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
    <>
      <InfoItem>
        <InfoItemTitle>Статус доставки:</InfoItemTitle> {status}
      </InfoItem>
      {warehouseSender && (
        <InfoItem>
          <InfoItemTitle>Місце відправлення:</InfoItemTitle> {warehouseSender}
        </InfoItem>
      )}
      {warehouseRecipient && (
        <InfoItem>
          <InfoItemTitle>Місце отримання:</InfoItemTitle> {warehouseRecipient}
        </InfoItem>
      )}
    </>
  );
};

export default WaybillInfo;
