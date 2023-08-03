const Select = () => {
  return (
    <label>
      <input type="text" name="city" />
      <ul style={{ backgroundColor: "#7188a8" }}>
        <li>
          <button type="button">city 1</button>
        </li>
        <li>
          <button type="button">city 2</button>
        </li>
        <li>
          <button type="button">city 3</button>
        </li>
      </ul>
    </label>
  );
};

export default Select;
