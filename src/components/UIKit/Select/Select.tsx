import { ChangeEvent, FC } from "react";
import { ISelectItem } from "types/types";

interface ISelectProps {
  list: ISelectItem[];
  value: string;
  onSelectChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectItemClick: (value: ISelectItem) => void;
}

const Select: FC<ISelectProps> = ({
  list,
  value,
  onSelectChange,
  onSelectItemClick,
}) => {
  return (
    <label>
      <input
        type="text"
        name="select"
        value={value}
        onChange={onSelectChange}
      />
      <ul style={{ backgroundColor: "#7188a8" }}>
        {list.map(({ id, title }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => {
                onSelectItemClick({ id, title });
              }}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </label>
  );
};

export default Select;
