import { configureStore } from "@reduxjs/toolkit";
import { warehouseApi } from "./warehouse/warehouseApi";
import { waybillApi } from "./waybill/waybillApi";

export const store = configureStore({
  reducer: {
    [waybillApi.reducerPath]: waybillApi.reducer,
    [warehouseApi.reducerPath]: warehouseApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(waybillApi.middleware)
      .concat(warehouseApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
