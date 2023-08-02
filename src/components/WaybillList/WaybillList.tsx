import WaybillListItem from "./WaybillListItem";

const WaybillList = () => {
  const list = [
    "20400048799002",
    "20400048799003",
    "20400048799004",
    "20400048799005",
  ];
  return (
    <ul>
      {list.map((item) => (
        <WaybillListItem key={item} value={item} />
      ))}
    </ul>
  );
};
export default WaybillList;
