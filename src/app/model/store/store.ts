import {configureStore} from '@reduxjs/toolkit';
import {appSlice} from "../slice/appSlice";
import {matchesApi} from "../../../widgets/MatchList/api/matchesApi";


export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [matchesApi.reducerPath]: matchesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(matchesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;