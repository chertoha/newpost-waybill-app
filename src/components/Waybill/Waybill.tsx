import WaybillForm from "components/WaybillForm";
import WaybillInfo from "components/WaybillInfo";
import WaybillHistory from "components/WaybillHistory";
import { useEffect, useState } from "react";
import { StorageService } from "services/StorageService";

const storage = new StorageService<string[]>("waybillHistory");

// const testInitialHistory = [
//   "20700155923660",
//   "59000988138658",
//   "20450727666448",
//   "11111111111111",
// ];

const Waybill = () => {
  const [searchedWaybill, setSearchedWaybill] = useState<string>("");
  // const [historyList, setHistoryList] = useState<string[]>([]);
  // const [historyList, setHistoryList] = useState<string[]>(testInitialHistory);
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

  return (
    <div>
      <h1>Waybill Status</h1>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#727d9e" }}>
          StatusStatusStatusStatusStatus
          <WaybillForm onSearch={onSearch} searchedWaybill={searchedWaybill} />
          <WaybillInfo searchedWaybill={searchedWaybill} />
        </div>
        <WaybillHistory list={historyList} onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Waybill;
