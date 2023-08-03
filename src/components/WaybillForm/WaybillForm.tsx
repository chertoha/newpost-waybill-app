import { FC, useEffect } from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { StorageService } from "services/StorageService";

// const storage = new StorageService<string>("search");

// const waybillValidationPattern = "^[1-9][0-9]{13}$";s

interface IFormElementsWaybill extends HTMLFormControlsCollection {
  waybillNumber: HTMLInputElement;
}

interface IWaybillFormProps {
  searchedWaybill: string;
  onSearch: (value: string) => void;
}

const WaybillForm: FC<IWaybillFormProps> = ({ searchedWaybill, onSearch }) => {
  // const [waybillNumber, setWaybillNumber] = useState<string>(
  //   () => storage.get() || searchedWaybill
  // );
  const [waybillNumber, setWaybillNumber] = useState<string>(searchedWaybill);

  useEffect(() => {
    // console.log(storage.get() || searchedWaybill);
    // if (searchedWaybill) {
    //   storage.set(searchedWaybill);
    //   setWaybillNumber(searchedWaybill);
    // }
    setWaybillNumber(searchedWaybill);
  }, [searchedWaybill]);

  const onWaybillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWaybillNumber(e.target.value);
    // storage.set(e.target.value);
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
          title="Waybill number may contain 10 digits and cannot start from zero"
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
