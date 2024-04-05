export const getImageUrl = (image) => {
  if (image.startsWith("http")) {
    return image;
  } else {
    return `${import.meta.env.VITE_SERVER_URL}${image}`;
  }
};
