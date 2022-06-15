const capitalize = (value: string) => {
  return value.slice(0, 1).toUpperCase().concat(value.slice(1));
};

export default capitalize;
