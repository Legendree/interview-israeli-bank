export const needAuthorize =
  !window.localStorage.getItem('token_experation') ||
  Date.parse(window.localStorage.getItem('token_experation')) > Date.now() ||
  !window.localStorage.getItem('token');
