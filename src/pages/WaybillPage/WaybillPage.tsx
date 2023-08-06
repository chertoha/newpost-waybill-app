import { Helmet } from "react-helmet-async";
import Waybill from "components/Waybill";

const WaybillPage = () => {
  return (
    <>
      <Helmet>
        <title>Статус ТТН</title>
        <meta name="description" content="Статус ТТН Нової Пошти за номером" />
      </Helmet>
      <Waybill />
    </>
  );
};

export default WaybillPage;
