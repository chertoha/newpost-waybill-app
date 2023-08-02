import WaybillList from "components/WaybillList";

const WaybillHistory = () => {
  return (
    <aside style={{ backgroundColor: "#bc87d6" }}>
      <h2>Історія</h2>
      <button type="button">Очистити історію</button>
      <WaybillList />
    </aside>
  );
};

export default WaybillHistory;
