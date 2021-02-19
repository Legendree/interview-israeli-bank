export const needAuthorize =
  !window.localStorage.getItem('token_experation') ||
  Date.now() >= parseInt(window.localStorage.getItem('token_experation')) ||
  !window.localStorage.getItem('token');
