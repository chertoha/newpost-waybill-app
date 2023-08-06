import { ChangeEvent, FC } from "react";
import { ISelectItem } from "types/types";
import {
  DropDown,
  DropDownBtn,
  DropDownItem,
  SelectContainer,
  SelectField,
} from "./Select.styled";

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
    <SelectContainer>
      <SelectField
        type="text"
        name="select"
        value={value}
        onChange={onSelectChange}
        placeholder="Населений пункт"
      />
      {list.length > 0 && (
        <DropDown>
          {list.map(({ id, title }) => (
            <DropDownItem key={id}>
              <DropDownBtn
                type="button"
                onClick={() => {
                  onSelectItemClick({ id, title });
                }}
              >
                {title}
              </DropDownBtn>
            </DropDownItem>
          ))}
        </DropDown>
      )}
    </SelectContainer>
  );
};

export default Select;
