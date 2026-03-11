import { configureStore } from '@reduxjs/toolkit';
import { AuthApi } from '../api/AuthApi';
import { reviewsApi } from '../api/ReviewsApi';
import { userTourApi } from '../api/userTourApi';
import { adminTourApi } from '../api/AdminTourApi';
import { userApi } from '../api/UserApi';
export const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [userTourApi.reducerPath]: userTourApi.reducer,
    [adminTourApi.reducerPath]: adminTourApi.reducer,
    [userApi.reducerPath]:userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthApi.middleware)
      .concat(reviewsApi.middleware)
      .concat(userTourApi.middleware)
      .concat(adminTourApi.middleware)
      .concat(userApi.middleware)
});