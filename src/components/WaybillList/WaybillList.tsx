import { FC } from "react";
import WaybillListItem from "./WaybillListItem";

interface IWaybillListProps {
  list: string[];
  onSearch: (value: string) => void;
}

const WaybillList: FC<IWaybillListProps> = ({ list, onSearch }) => {
  return (
    <ul>
      {list.map((item) => (
        <WaybillListItem key={item} value={item} onSearch={onSearch} />
      ))}
    </ul>
  );
};
export default WaybillList;
