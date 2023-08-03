import { ChangeEvent, FC } from "react";
import { ISelectItem } from "types/types";
const debounce = require("lodash.debounce");

interface ISelectProps {
  list: ISelectItem[];
  value: string;
  onSelectChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Select: FC<ISelectProps> = ({ list, value, onSelectChange }) => {
  return (
    <label>
      <input
        type="text"
        name="city"
        value={value}
        onChange={debounce(onSelectChange, 200)}
      />
      <ul style={{ backgroundColor: "#7188a8" }}>
        {list.map(({ id, title }) => (
          <li key={id}>
            <button type="button">{title}</button>
          </li>
        ))}
      </ul>
    </label>
  );
};

export default Select;
