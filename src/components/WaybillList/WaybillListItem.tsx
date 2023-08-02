import { FC } from "react";

interface WaybillListItemProps {
  value: string;
}

const WaybillListItem: FC<WaybillListItemProps> = ({ value }) => {
  return (
    <li>
      <button type="button">{value}</button>
    </li>
  );
};
export default WaybillListItem;
