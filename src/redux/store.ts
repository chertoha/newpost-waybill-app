import { configureStore } from "@reduxjs/toolkit";
import { waybillApi } from "./waybill/waybillApi";
// import issuesReducer from "./issues/slice";

export const store = configureStore({
  reducer: {
    // issues: issuesReducer,
    [waybillApi.reducerPath]: waybillApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(waybillApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
