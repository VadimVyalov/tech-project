import { usersApi } from "./usersApi";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUsers: [],
  following: [],
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // setFollowing(state, { payload }) {
    //   state.currentUsers.find((user) => {
    //     if (user.id === payload) {
    //       user.following = !user.following;
    //       //user.following ? (user.followers += 1) : (user.followers -= 1);
    //     }
    //   });
    //   const idx = state.following.findIndex((e) => e === payload);
    //   idx < 0 ? state.following.push(payload) : state.following.splice(idx, 1);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        usersApi.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.currentUsers = [
            ...state.currentUsers,
            ...payload.filter((newUser) => {
              return !state.currentUsers.find((user) => user.id === newUser.id);
            }),
          ];

          state.currentUsers.map((user) => {
            user.following = state.following.includes(user.id);
          });
        }
      )
      .addMatcher(
        usersApi.endpoints.setFollowers.matchFulfilled,
        (state, { payload }) => {
          state.currentUsers.find((user) => {
            if (user.id === payload.id) {
              user.following = !user.following;
              // user.following ? (user.followers += 1) : (user.followers -= 1);
              user.followers = payload.followers;
              console.log("------");
            }
          });

          const idx = state.following.findIndex((e) => e === payload.id);
          idx < 0
            ? state.following.push(payload.id)
            : state.following.splice(idx, 1);
        }
      );
  },
});
export const usersReducer = usersSlice.reducer;
// export const { setFollowing } = usersSlice.actions;
