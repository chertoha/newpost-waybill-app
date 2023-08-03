import { FC } from "react";
import { ISelectItem } from "types/types";

interface ISelectProps {
  list: ISelectItem[];
}

const Select: FC<ISelectProps> = ({ list }) => {
  return (
    <label>
      <input type="text" name="city" />
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
