import { FC } from "react";
import { Item, ItemButton } from "./WaybillList.styled";

interface WaybillListItemProps {
  value: string;
  onSearch: (value: string) => void;
}

const WaybillListItem: FC<WaybillListItemProps> = ({ value, onSearch }) => {
  return (
    <Item>
      <ItemButton
        type="button"
        onClick={() => {
          onSearch(value);
        }}
      >
        {value}
      </ItemButton>
    </Item>
  );
};
export default WaybillListItem;
