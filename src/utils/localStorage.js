const USER_DETAILS_KEY = 'userDetails';

export const getUserDetails = () => {
  const userDetailsString = localStorage.getItem(USER_DETAILS_KEY);
  return userDetailsString ? JSON.parse(userDetailsString) : null;
};

export const setUserDetails = (userDetails) => {
  localStorage.setItem(USER_DETAILS_KEY, JSON.stringify(userDetails));
};

export const clearUserDetails = () => {
  localStorage.removeItem(USER_DETAILS_KEY);
};
