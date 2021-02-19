import axios from 'axios';

export const GetAlbumsTracks = async (id, page, authToken) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/albums/${id}/tracks?limit=${15}&offset=${
      page * 15
    }`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response.data;
};
