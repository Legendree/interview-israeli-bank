import axios from 'axios';

export const authorize = (
  client_id = '4054859e016f4b9bbe0f6aebb4a2a3b0',
  response_type = 'code',
  redirect_uri = 'http://localhost:3000/login'
) => {
  return `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}`;
};

export const getToken = async (code) => {
  const data = {
    grant_type: 'client_credentials',
    code,
    redirect_uri: 'http://localhost:3000/login',
  };

  const response = await axios.post(
    `https://accounts.spotify.com/api/token?grant_type=${data.grant_type}&code=${data.code}&redirect_uri=${data.redirect_uri}`,
    null,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(
          '4054859e016f4b9bbe0f6aebb4a2a3b0:3b964c371e394c3fb3a981a3829ead8a'
        )}`,
      },
    }
  );

  return response.data;
};
