import { FC } from "react";
import { ChangeEvent, FormEvent, useState } from "react";

// const waybillValidationPattern = "^[1-9][0-9]{13}$";

interface IFormElementsWaybill extends HTMLFormControlsCollection {
  waybillNumber: HTMLInputElement;
}

interface IWaybillFormProps {
  onSearch: (value: string) => void;
}

const WaybillForm: FC<IWaybillFormProps> = ({ onSearch }) => {
  const [waybillNumber, setWaybillNumber] = useState<string>("");

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
    <form style={{ backgroundColor: "#cc4e84" }} onSubmit={onSubmit}>
      <label>
        {/* Введіть ТТН */}
        <input
          type="text"
          name="waybillNumber"
          required
          // pattern={waybillValidationPattern}
          title="Waybill number may contain 10 digits"
          placeholder="ТТН"
          value={waybillNumber}
          onChange={onWaybillChange}
        />
      </label>
      <button type="submit">Отримати статус ТТН</button>
    </form>
  );
};

export default WaybillForm;
