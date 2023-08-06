import { FC, useEffect } from "react";
import { ChangeEvent, FormEvent, useState } from "react";

import { StyledForm, Submit, WaybillField } from "./WaybillForm.styled";

const waybillValidationPattern = "^[1-9][0-9]{13}$";

interface IFormElementsWaybill extends HTMLFormControlsCollection {
  waybillNumber: HTMLInputElement;
}

interface IWaybillFormProps {
  searchedWaybill: string;
  onSearch: (value: string) => void;
}

const WaybillForm: FC<IWaybillFormProps> = ({ searchedWaybill, onSearch }) => {
  const [waybillNumber, setWaybillNumber] = useState<string>(searchedWaybill);

  useEffect(() => {
    setWaybillNumber(searchedWaybill);
  }, [searchedWaybill]);

  const onWaybillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWaybillNumber(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const elements = form.elements as IFormElementsWaybill;
    const value = elements.waybillNumber.value;

    onSearch(value);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <WaybillField
        type="text"
        name="waybillNumber"
        required
        pattern={waybillValidationPattern}
        title="Номер ТТН повинен складатися з 10 цифр і не починатися з нуля"
        placeholder="ТТН"
        value={waybillNumber}
        onChange={onWaybillChange}
      />
      <Submit type="submit">Отримати статус ТТН</Submit>
    </StyledForm>
  );
};

export default WaybillForm;
