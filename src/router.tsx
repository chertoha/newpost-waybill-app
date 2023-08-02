import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

export const ROUTES = {
  HOME: "/",
  WAYBILL: "/waybill",
  WAREHOUSE: "/warehouse",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: (
      <div>
        Home test <Outlet />
      </div>
    ),
    // children: [
    //   {
    //     index: true,
    //     element: <Navigate to={ROUTES.WAYBILL} replace={true} />,
    //   },
    //   {
    //     path: ROUTES.WAYBILL,
    //     element: <div>WAYBILL</div>,
    //   },
    //   {
    //     path: ROUTES.WAREHOUSE,
    //     element: <div>WAREHOUSE</div>,
    //   },
    // ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/newpost-waybill-app",
});

export default router;
