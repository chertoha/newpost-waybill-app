import WaybillForm from "components/WaybillForm";
import WaybillInfo from "components/WaybillInfo";
import WaybillHistory from "components/WaybillHistory";
import { useState } from "react";

const Waybill = () => {
  const [searchedWaybill, setSearchedWaybill] = useState<string>("");

  const onSearch = (value: string) => {
    setSearchedWaybill(value);
  };

  return (
    <div>
      <h1>Waybill Status</h1>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#727d9e" }}>
          StatusStatusStatusStatusStatus
          <WaybillForm onSearch={onSearch} />
          <WaybillInfo searchedWaybill={searchedWaybill} />
        </div>
        <WaybillHistory />
      </div>
    </div>
  );
};

export default Waybill;
