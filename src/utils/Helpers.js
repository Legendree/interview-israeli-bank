export const canUseApp =
  !window.localStorage.getItem('token_experation') ||
  window.localStorage.getItem('token_experation') > Date.now() ||
  !window.localStorage.getItem('token');
