const API_BASE_URL = 'https://api.tvmaze.com';

export const getShows = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/shows?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching shows');
  }
};

export const getShowById = async (showId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/shows/${showId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching show details');
  }
};
