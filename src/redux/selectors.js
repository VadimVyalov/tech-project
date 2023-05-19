import { createSelector } from "@reduxjs/toolkit";

import { usersApi } from "./usersApi";

const inititial = [];
const page = 3;

export const selectFilter = (state) => state.filter;
export const selectCurrentUsers = (state) => state.users.currentUsers;

export const selectResult = usersApi.endpoints.getUsers.select(page);
export const selectContacts = createSelector(
  selectResult,
  (Result) => Result?.data ?? inititial
);

export const selectUsersCount = (page) =>
  createSelector(
    (state) => usersApi.endpoints.getUsers.select(page)(state),
    (Result) => Result?.data ?? inititial
  );

export const selectfiltredContact = createSelector(
  [selectFilter, selectContacts],
  (filter, users) => {
    return users.filter((user) => user.name.toLowerCase().includes(filter));
  }
);
