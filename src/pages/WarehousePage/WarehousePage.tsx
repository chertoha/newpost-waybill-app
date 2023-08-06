import Warehouse from "components/Warehouse/Warehouse";
import { Helmet } from "react-helmet";

const WarehousePage = () => {
  return (
    <>
      <Helmet>
        <title>Список відділень</title>
        <meta
          name="description"
          content="Пошук відділень Нової Пошти за назвою населеного пункту"
        />
      </Helmet>
      <Warehouse />
    </>
  );
};

export default WarehousePage;
