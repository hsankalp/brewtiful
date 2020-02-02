export const capitalizeFirstLetter = str => {
  return str.replace(str.charAt(0), str.charAt(0).toUpperCase());
};

export const getImageById = id => {
  if (id >= 1000) {
    return Math.floor(id / 10);
  }
  return id;
};
