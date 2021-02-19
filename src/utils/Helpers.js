export const needAuthorize =
  !window.localStorage.getItem('token_experation') ||
  Date.now() >= parseInt(window.localStorage.getItem('token_experation')) ||
  !window.localStorage.getItem('token');

export const convertToTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec - minutes * 60);
  return `${minutes}:${seconds <= 9 ? '0' + seconds : seconds}`;
};
