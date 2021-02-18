import axios from 'axios';

export const fetchAlbums = async (
  ids = '382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc',
  market = 'ES',
  authToken = 'BQDALuJalnMGF11X6UJMC4GrapCWPORHRmthL_5DkxtJNSgIWGUzXbIIP4bX1kbUXH2RgAhjL-An-0oBBfGSywi8IZLLrMWDo3pDcmecMxFps3dCGdOTmyUBWzLe9ySZvNDeuUZ_2eulsAOUHNJOXt9_WSipVRdN_QIVWFFO1znMUiEzzSAosWj-iEBIK5OJIwVE6OnbHsLFafwPP_A8QwD6mZcnH-5dggwqyUSuuCr_BTkoggbQE0KqjX05wa4GHbaivchohS73aQRgQhSJCzeA43V6QI5nY6k'
) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/albums?ids=${ids}&market=${market}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};

// Returns a list of new albums
export const getAllNewReleases = async (
  currentPage = 0,
  authToken = 'BQDALuJalnMGF11X6UJMC4GrapCWPORHRmthL_5DkxtJNSgIWGUzXbIIP4bX1kbUXH2RgAhjL-An-0oBBfGSywi8IZLLrMWDo3pDcmecMxFps3dCGdOTmyUBWzLe9ySZvNDeuUZ_2eulsAOUHNJOXt9_WSipVRdN_QIVWFFO1znMUiEzzSAosWj-iEBIK5OJIwVE6OnbHsLFafwPP_A8QwD6mZcnH-5dggwqyUSuuCr_BTkoggbQE0KqjX05wa4GHbaivchohS73aQRgQhSJCzeA43V6QI5nY6k'
) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/browse/new-releases?limit=${15}&offset=${
      currentPage * 15
    }`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return response.data;
};
