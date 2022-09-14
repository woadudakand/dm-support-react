export const imageUrl = (url) => {
  return `http://${window.location.host}${import.meta.env.BASE_URL}${url}`;
};
