const Warehouse = () => {
  return (
    <div>
      <h1>Список відділень</h1>
      <div style={{ display: "flex" }}>
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
        <div style={{ backgroundColor: "#1fa3a1" }}>
          <ul>
            <li>Warehouse 1</li>
            <li>Warehouse 2</li>
            <li>Warehouse 3</li>
            <li>Warehouse 4</li>
            <li>Warehouse 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
