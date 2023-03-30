import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type SliceState = {
  level: number;
  latitude: number;
  longitude: number;
  maptype: boolean;
  trafficState: boolean;
  usedistrictState: boolean;
  terrainState: boolean;
  bikeState: boolean;
};

const initialState: SliceState = {
  level: 3,
  latitude: 0,
  longitude: 0,
  maptype: true,

  trafficState: false,
  usedistrictState: false,
  terrainState: false,
  bikeState: false,
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

    // 맵 level 설정
    setLevel(state, { payload }: PayloadAction<number>) {
      state.level = payload;
    },

    // 위도 설정
    setLatitude(state, { payload }: PayloadAction<number>) {
      state.latitude = payload;
    },

    // 경도 설정
    setLongitude(state, { payload }: PayloadAction<number>) {
      state.longitude = payload;
    },

    // 지도뷰 설정
    showRoadmap(state) {
      state.maptype = true;
    },

    // 스카이뷰 설정
    showSkymap(state) {
      state.maptype = false;
    },

    // 교통정보 설정
    handleTrafficState(state) {
      state.trafficState = !state.trafficState;
    },

    // 지적편집도 설정
    handleUsedistrictState(state) {
      state.usedistrictState = !state.usedistrictState;
    },

    // 지형도 설정
    handleTerrainState(state) {
      state.terrainState = !state.terrainState;
    },

    // 자전거 설정
    handleBikeState(state) {
      state.bikeState = !state.bikeState;
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

export const {
  logout,
  increaseLevel,
  decreaseLevel,
  setLevel,
  setLatitude,
  setLongitude,
  showRoadmap,
  showSkymap,
  handleTrafficState,
  handleUsedistrictState,
  handleTerrainState,
  handleBikeState,
} = slice.actions;
export default slice.reducer;

export const selectLevel = (state: RootState) => state.mapSlice.level;
export const selectLatitude = (state: RootState) => state.mapSlice.latitude;
export const selectLongitude = (state: RootState) => state.mapSlice.longitude;
export const selectMaptype = (state: RootState) => state.mapSlice.maptype;

export const selectTrafficState = (state: RootState) =>
  state.mapSlice.trafficState;
export const selectUsedistrictState = (state: RootState) =>
  state.mapSlice.usedistrictState;
export const selectTerrainState = (state: RootState) =>
  state.mapSlice.terrainState;
export const selectBikeState = (state: RootState) => state.mapSlice.bikeState;
