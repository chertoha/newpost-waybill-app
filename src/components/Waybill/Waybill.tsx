import WaybillForm from "components/WaybillForm";
import WaybillInfo from "components/WaybillInfo";
import WaybillHistory from "components/WaybillHistory";

const Waybill = () => {
  return (
    <div>
      <h1>Waybill Status</h1>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#727d9e" }}>
          StatusStatusStatusStatusStatus
          <WaybillForm />
          <WaybillInfo />
        </div>
        <WaybillHistory />
      </div>
    </div>
  );
};

export default Waybill;
