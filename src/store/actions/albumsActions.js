export const setIsFetching = (payload) => ({ type: 'SET_FETCHING', payload });

export const setData = (payload) => ({
  type: 'SET_DATA',
  payload,
});

export const setPage = (payload) => ({
  type: 'SET_PAGE',
  payload,
});

export const setDoneFetching = (payload) => ({
  type: 'DONE_FETCHING',
  payload,
});
