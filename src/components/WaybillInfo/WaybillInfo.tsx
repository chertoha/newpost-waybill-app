import Spinner from "components/UIKit/Spinner";
import { FC } from "react";
import { useGetStatusQuery } from "redux/waybill/waybillApi";
import { InfoItem, InfoItemTitle, SpinnerWrapper } from "./WaybillInfo.styled";

interface IWaybillInfoProps {
  searchedWaybill: string;
}

const WaybillInfo: FC<IWaybillInfoProps> = ({ searchedWaybill }) => {
  const { data, isFetching } = useGetStatusQuery(searchedWaybill, {
    skip: searchedWaybill ? false : true,
  });

  console.log(data);

  if (!data) return null;

  if (isFetching) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  if (!data.success) {
    return <InfoItemTitle>{data.errors[0]}</InfoItemTitle>;
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
