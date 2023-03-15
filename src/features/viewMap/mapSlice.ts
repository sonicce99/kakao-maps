import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type SliceState = {
  level: number;
};

const initialState: SliceState = {
  level: 3,
};

const slice = createSlice({
  name: "map",
  initialState,
  reducers: {
    logout: () => initialState,

    // level 증가
    increaseLevel(state) {
      state.level++;
    },

    // level 감소
    decreaseLevel(state) {
      if (state.level > 1) {
        state.level--;
      }
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addMatcher(userApi.endpoints.login.matchPending, (state, action) => {
    //     console.log("pending", action);
    //   })
    //   .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
    //     state.omsID = action.payload.omsID;
    //     state.custCd = action.payload.custCd;
    //     state.centerCd = action.payload.centerCd;
    //     state.centerName = action.payload.centerName;
    //     state.permission = action.payload.permission;
    //     state.accessToken = action.payload.accessToken;
    //     state.refreshToken = action.payload.refreshToken;
    //     state.accessTokenExpireTime = action.payload.accessTokenExpireTime;
    //     state.refreshTokenExpireTime = action.payload.refreshTokenExpireTime;
    //   })
    //   .addMatcher(userApi.endpoints.login.matchRejected, (state, action) => {
    //     console.log("rejected", action);
    //   });
  },
});

export const { logout, increaseLevel, decreaseLevel } = slice.actions;
export default slice.reducer;

export const selectLevel = (state: RootState) => state.mapSlice.level;