import Layout from "components/Layout";
// import WarehousePage from "pages/WarehousePage";
// import WaybillPage from "pages/WaybillPage";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
// import { createBrowserRouter } from "react-router-dom";

const WaybillPage = lazy(() => import("./pages/WaybillPage/WaybillPage"));
const WarehousePage = lazy(() => import("./pages/WarehousePage/WarehousePage"));

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
      {
        index: true,
        element: <Navigate to={ROUTES.WAYBILL} replace={true} />,
      },
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
