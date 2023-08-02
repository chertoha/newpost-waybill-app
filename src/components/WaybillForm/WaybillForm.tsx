const waybillValidationPattern = "^[1-9][0-9]{13}$";

const WaybillForm = () => {
  return (
    <form style={{ backgroundColor: "#cc4e84" }}>
      <label>
        {/* Введіть ТТН */}
        <input
          type="text"
          name="waybillNumber"
          required
          pattern={waybillValidationPattern}
          title="Waybill number may contain 10 digits"
          placeholder="ТТН"
        />
      </label>
      <button type="submit">Отримати статус ТТН</button>
    </form>
  );
};

export default WaybillForm;
