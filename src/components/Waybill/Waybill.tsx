import WaybillForm from "components/WaybillForm";
import WaybillInfo from "components/WaybillInfo";
import WaybillHistory from "components/WaybillHistory";
import { useEffect, useState } from "react";
import { StorageService } from "services/StorageService";
import { Data, InfoWrapper, WaybillContainer } from "./Waybill.styled";
import Title from "components/UIKit/Title";

const storage = new StorageService<string[]>("waybillHistory");

// const testInitialHistory = [
//   "20700155923660",
//   "59000988138658",
//   "20450727666448",
//   "11111111111111",
// ];

const Waybill = () => {
  const [searchedWaybill, setSearchedWaybill] = useState<string>("");
  const [historyList, setHistoryList] = useState<string[]>(
    () => storage.get() || []
  );

  useEffect(() => {
    storage.set(historyList);
  }, [historyList]);

  const onSearch = (value: string) => {
    setSearchedWaybill(value);
    setHistoryList((prevState) => [
      value,
      ...prevState.filter((item) => item !== value),
    ]);
  };

  const clearHistory = () => {
    setHistoryList([]);
  };

  return (
    <WaybillContainer>
      <Title text="Перевірити ТТН" />
      <WaybillForm onSearch={onSearch} searchedWaybill={searchedWaybill} />

      <Data>
        <InfoWrapper $isvisible={searchedWaybill}>
          <WaybillInfo searchedWaybill={searchedWaybill} />
        </InfoWrapper>
        <WaybillHistory
          list={historyList}
          onSearch={onSearch}
          clearHistory={clearHistory}
        />
      </Data>
    </WaybillContainer>
  );
};

export default Waybill;
