export default {
  check: () => {
    return !!localStorage.getItem("userData");
  },
  logout: () => {
     localStorage.removeItem('userData');
  },
};
