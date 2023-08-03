import WaybillList from "components/WaybillList";
import { FC } from "react";

interface IWaybillHistoryProps {
  list: string[];
  onSearch: (value: string) => void;
  clearHistory: () => void;
}

const WaybillHistory: FC<IWaybillHistoryProps> = ({
  clearHistory,
  ...rest
}) => {
  return (
    <aside style={{ backgroundColor: "#bc87d6" }}>
      <h2>Історія</h2>
      <button type="button" onClick={clearHistory}>
        Очистити історію
      </button>
      <WaybillList {...rest} />
    </aside>
  );
};

export default WaybillHistory;
