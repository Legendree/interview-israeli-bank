import axios from 'axios';

export const getItemsBySearch = async (query, authToken, page) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${query}&type=artist,album&limit=${15}&offset=${
      15 * page
    }`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};
