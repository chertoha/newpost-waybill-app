import ClockLoader from "react-spinners/ClockLoader";

const Spinner = () => {
  return (
    <ClockLoader
      color="#AF3D8F"
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
