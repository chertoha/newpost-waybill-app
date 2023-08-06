import Waybill from "components/Waybill";
import { Helmet } from "react-helmet-async";
// import { Helmet } from "react-helmet";

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
