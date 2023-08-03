import { FC } from "react";

interface WaybillListItemProps {
  value: string;
  onSearch: (value: string) => void;
}

const WaybillListItem: FC<WaybillListItemProps> = ({ value, onSearch }) => {
  return (
    <li>
      <button
        type="button"
        onClick={() => {
          onSearch(value);
        }}
      >
        {value}
      </button>
    </li>
  );
};
export default WaybillListItem;
