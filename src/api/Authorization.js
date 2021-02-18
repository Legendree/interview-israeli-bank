export const authorize = (
  client_id = '4054859e016f4b9bbe0f6aebb4a2a3b0',
  response_type = 'code',
  redirect_uri = 'http://localhost:3000/login'
) => {
  return `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}`;
};
