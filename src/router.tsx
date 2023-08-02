import Layout from "components/Layout";
import WarehousePage from "pages/WarehousePage";
import WaybillPage from "pages/WaybillPage";
// import { createBrowserRouter, Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

export const ROUTES = {
  HOME: "/",
  WAYBILL: "/waybill",
  WAREHOUSE: "/warehouse",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to={ROUTES.WAYBILL} replace={true} />,
      // },
      {
        path: ROUTES.WAYBILL,
        element: <WaybillPage />,
      },
      {
        path: ROUTES.WAREHOUSE,
        element: <WarehousePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/newpost-waybill-app",
});

export default router;
