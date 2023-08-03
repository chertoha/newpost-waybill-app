import WaybillList from "components/WaybillList";
import { FC } from "react";

interface IWaybillHistoryProps {
  list: string[];
  onSearch: (value: string) => void;
}

const WaybillHistory: FC<IWaybillHistoryProps> = (props) => {
  return (
    <aside style={{ backgroundColor: "#bc87d6" }}>
      <h2>Історія</h2>
      <button type="button">Очистити історію</button>
      <WaybillList {...props} />
    </aside>
  );
};

export default WaybillHistory;
